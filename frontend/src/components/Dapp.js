import React from "react";

// We'll use ethers to interact with the Ethereum network and our contract
import { BigNumber, ethers } from "ethers";

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import PancakeRouterArtifact from "../contracts/PancakeRouter.json";
import IERC20 from "../contracts/erc20.json";
import contractAddress from "../contracts/contract-address.json";

// All the logic of this dapp is contained in the Dapp component.
// These other components are just presentational ones: they don't have any
// logic. They just render HTML.
import { NoWalletDetected } from "./NoWalletDetected";
import { ConnectWallet } from "./ConnectWallet";
import { Loading } from "./Loading";
import { Transfer } from "./Transfer";
import { TransactionErrorMessage } from "./TransactionErrorMessage";
import { WaitingForTransactionMessage } from "./WaitingForTransactionMessage";
import { NoTokensMessage } from "./NoTokensMessage";
import { AddLiquidity } from "./AddLiquidity";
import { BNBTestChainParams, bnbChainId } from "./chainConfig";


// This is an error code that indicates that the user canceled a transaction
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

// This component is in charge of doing these things:
//   1. It connects to the user's wallet
//   2. Initializes ethers and the Token contract
//   3. Polls the user balance to keep it updated.
//   4. Transfers tokens by sending transactions
//   5. Renders the whole application
//
// Note that (3) and (4) are specific of this sample application, but they show
// you how to keep your Dapp and contract's state in sync,  and how to send a
// transaction.
export class Dapp extends React.Component {
  constructor(props) {
    super(props);

    // We store multiple things in Dapp's state.
    // You don't need to follow this pattern, but it's an useful example.
    this.initialState = {
      // The info of the token (i.e. It's Name and symbol)
      tokenDataA: undefined,
      tokenDataB: undefined,
      // The user's address and balance
      selectedAddress: undefined,
      balanceA: undefined,
      balanceB: undefined,
      // The ID about transactions being sent, and any possible error with them
      txBeingSent: undefined,
      transactionError: undefined,
      networkError: undefined,
    };

    this.state = this.initialState;
  }

  render() {
    // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install a wallet.
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    // The next thing we need to do, is to ask the user to connect their wallet.
    // When the wallet gets connected, we are going to save the users's address
    // in the component's state. So, if it hasn't been saved yet, we have
    // to show the ConnectWallet component.
    //
    // Note that we pass it a callback that is going to be called when the user
    // clicks a button. This callback just calls the _connectWallet method.
    if (!this.state.selectedAddress) {
      return (
        <ConnectWallet
          connectWallet={() => this._connectWallet()}
          networkError={this.state.networkError}
          dismiss={() => this._dismissNetworkError()}
        />
      );
    }

    // If the token data or the user's balance hasn't loaded yet, we show
    // a loading component.
    if (!this.state.tokenDataA || !this.state.tokenDataB || !this.state.balanceA || !this.state.balanceB) {
      return <Loading />;
    }

    // If everything is loaded, we render the application.
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-12">
            <h1>
              {this.state.tokenDataA.name} ({this.state.tokenDataA.symbol})
            </h1>
            <p>
              Welcome <b>{this.state.selectedAddress}</b>, you have{" "}
              <b>
                {this.state.balanceA.toString()} {this.state.tokenDataA.symbol}
              </b>
              .
            </p>
            <div className="col-12">
              <h1>
                {this.state.tokenDataB.name} ({this.state.tokenDataB.symbol})
              </h1>
              <p>
                Welcome <b>{this.state.selectedAddress}</b>, you have{" "}
                <b>
                  {this.state.balanceB.toString()} {this.state.tokenDataB.symbol}
                </b>
                .
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12">
            {/* 
              Sending a transaction isn't an immediate action. You have to wait
              for it to be mined.
              If we are waiting for one, we show a message here.
            */}
            {this.state.txBeingSent && (
              <WaitingForTransactionMessage txHash={this.state.txBeingSent} />
            )}

            {/* 
              Sending a transaction can fail in multiple ways. 
              If that happened, we show a message here.
            */}
            {this.state.transactionError && (
              <TransactionErrorMessage
                message={this._getRpcErrorMessage(this.state.transactionError)}
                dismiss={() => this._dismissTransactionError()}
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {/*
              If the user has no tokens, we don't show the Transfer form
            */}
            {this.state.balanceA.eq(0) && (
              <NoTokensMessage selectedAddress={this.state.selectedAddress} />
            )}

            {/*
              This component displays a form that the user can use to send a 
              transaction and transfer some tokens.
              The component doesn't have logic, it just calls the transferTokens
              callback.
            */}
            {this.state.balanceA.gt(0) && (
              <Transfer
                transferTokens={(to, amount) =>
                  this._transferTokens(to, amount)
                }
                tokenSymbol={this.state.tokenDataB.symbol}
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {/*
              If the user has no tokens, we don't show the Transfer form
            */}
            {
              this.state.balanceA.eq(0) && (
                <NoTokensMessage selectedAddress={this.state.selectedAddress} />
              )}

            {this.state.balanceB.eq(0) && (
              <NoTokensMessage selectedAddress={this.state.selectedAddress} />
            )}

            {/*
              This component displays a form that the user can use to send a 
              transaction and transfer some tokens.
              The component doesn't have logic, it just calls the transferTokens
              callback.
            */}
            {this.state.balanceA.gt(0) && this.state.balanceB.gt(0) && (
              <AddLiquidity
                addLiquidity={(to, amountA, amountB) =>
                  this._addLiquidity(to, amountA, amountB)
                }
                tokenSymbolA={this.state.tokenDataA.symbol}
                tokenSymbolB={this.state.tokenDataB.symbol}
              />
            )}
          </div>
        </div>

      </div>
    );
  }

  componentWillUnmount() {
    // We poll the user's balance, so we have to stop doing that when Dapp
    // gets unmounted
    this._stopPollingData();
  }

  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Once we have the address, we can initialize the application.

    // First we check the network
    await this._checkNetwork();

    await this._initialize(selectedAddress);


    // We reinitialize it whenever the user changes their account.
    await window.ethereum.on("accountsChanged", ([newAddress]) => {
      this._stopPollingData();
      // `accountsChanged` event can be triggered with an undefined newAddress.
      // This happens when the user removes the Dapp from the "Connected
      // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
      // To avoid errors, we reset the dapp state 
      if (newAddress === undefined) {
        return this._resetState();
      }

      this._initialize(newAddress);
    });
  }

  async _initialize(userAddress) {
    // This method initializes the dapp

    // We first store the user's address in the component's state
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the token's data, and start polling
    // for the user's balance.

    // Fetching the token data and the user's balance are specific to this
    // sample project, but you can reuse the same initialization pattern.
    await this._initializeEthers();
    await this._getTokenData();
    this._startPollingData();
  }

  async _initializeEthers() {
    // We first initialize ethers by creating a provider using window.ethereum
    this._provider1 = new ethers.providers.Web3Provider(window.ethereum);
    this._provider = new ethers.providers.JsonRpcProvider(BNBTestChainParams.rpcUrls[0]);
    // Then, we initialize the contract using that provider and the token's
    // artifact. You can do this same thing with your contracts.
    console.log("this._provider: ", this._provider);
    const signer = this._provider.getSigner(0);
    console.log("signer: ", signer);
    this._router = new ethers.Contract(
      contractAddress.PancakeRouter,
      PancakeRouterArtifact.abi,
      this._provider.getSigner()
    );
    this._tokenPrince = new ethers.Contract(
      contractAddress.Prince,
      IERC20,
      this._provider.getSigner()
    );
    this._tokenWBNB = new ethers.Contract(
      contractAddress.WBNB,
      IERC20,
      this._provider.getSigner()
    );
  }

  // The next two methods are needed to start and stop polling data. While
  // the data being polled here is specific to this example, you can use this
  // pattern to read any data from your contracts.
  //
  // Note that if you don't need it to update in near real time, you probably
  // don't need to poll it. If that's the case, you can just fetch it when you
  // initialize the app, as we do with the token data.
  _startPollingData() {
    this._pollDataInterval = setInterval(() => this._updateBalance(), 1000);

    // We run it once immediately so we don't have to wait for it
    this._updateBalance();
  }

  _stopPollingData() {
    clearInterval(this._pollDataInterval);
    this._pollDataInterval = undefined;
  }

  // The next two methods just read from the contract and store the results
  // in the component state.
  async _getTokenData() {
    var name = await this._tokenPrince.name();
    var symbol = await this._tokenPrince.symbol();

    console.log("name %s, symbole %s", name, symbol);
    this.setState({ tokenDataA: { name, symbol } });

    name = await this._tokenWBNB.name();
    symbol = await this._tokenWBNB.symbol();

    console.log("name %s, symbole %s", name, symbol);
    this.setState({ tokenDataB: { name, symbol } });
  }

  async _updateBalance() {
    const balanceA = await this._tokenPrince.balanceOf(this.state.selectedAddress);
    const balanceB = await this._tokenWBNB.balanceOf(this.state.selectedAddress);
    this.setState({ balanceA: balanceA });
    const balanceBB = BigNumber.from(1);
    this.setState({ balanceB: balanceBB });
  }

  // This method sends an ethereum transaction to transfer tokens.
  // While this action is specific to this application, it illustrates how to
  // send a transaction.
  async _transferTokens(to, amount) {
    // Sending a transaction is a complex operation:
    //   - The user can reject it
    //   - It can fail before reaching the ethereum network (i.e. if the user
    //     doesn't have ETH for paying for the tx's gas)
    //   - It has to be mined, so it isn't immediately confirmed.
    //     Note that some testing networks, like Hardhat Network, do mine
    //     transactions immediately, but your dapp should be prepared for
    //     other networks.
    //   - It can fail once mined.
    //
    // This method handles all of those things, so keep reading to learn how to
    // do it.

    try {
      // If a transaction fails, we save that error in the component's state.
      // We only save one such error, so before sending a second transaction, we
      // clear it.
      this._dismissTransactionError();

      // We send the transaction, and save its hash in the Dapp's state. This
      // way we can indicate that we are waiting for it to be mined.
      const tx = await this._token.transfer(to, amount);
      this.setState({ txBeingSent: tx.hash });

      // We use .wait() to wait for the transaction to be mined. This method
      // returns the transaction's receipt.
      const receipt = await tx.wait();

      // The receipt, contains a status flag, which is 0 to indicate an error.
      if (receipt.status === 0) {
        // We can't know the exact error that made the transaction fail when it
        // was mined, so we throw this generic one.
        throw new Error("Transaction failed");
      }

      // If we got here, the transaction was successful, so you may want to
      // update your state. Here, we update the user's balance.
      await this._updateBalance();
    } catch (error) {
      // We check the error code to see if this error was produced because the
      // user rejected a tx. If that's the case, we do nothing.
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }

      // Other errors are logged and stored in the Dapp's state. This is used to
      // show them to the user, and for debugging.
      console.error(error);
      this.setState({ transactionError: error });
    } finally {
      // If we leave the try/catch, we aren't sending a tx anymore, so we clear
      // this part of the state.
      this.setState({ txBeingSent: undefined });
    }
  }

  async _addLiquidity(to, amountA, amountB) {
    try {
      // If a transaction fails, we save that error in the component's state.
      // We only save one such error, so before sending a second transaction, we
      // clear it.
      this._dismissTransactionError();

      // We send the transaction, and save its hash in the Dapp's state. This
      // way we can indicate that we are waiting for it to be mined.
      const deadline = ethers.BigNumber.from(Date.now()) + 600n;
      const tokenAmountA = ethers.utils.parseEther(amountA);
      const tokenAmountB = ethers.utils.parseEther(amountB);

      const txApproveA = await this._tokenPrince.approve(contractAddress.PancakeRouter, tokenAmountA);
      this.setState({ txBeingSent: txApproveA.hash });
      console.log("router: ", this._router);

      const gas = await this._router.estimateGas.addLiquidityETH(
        contractAddress.Prince,
        tokenAmountA,
        tokenAmountA, tokenAmountB,
        to,
        deadline,
        {
          value: tokenAmountB,
          account: this.selectedAddress
        }
      ).then((gasEstimate) => {
        console.log("Estimated gas:", gasEstimate.toString());
      }).catch((error) => {
        console.error("Error estimating gas:", error);
      });
      console.log("gas:", gas);

      const tx = await this._router.addLiquidityETH(
        contractAddress.Prince,
        tokenAmountA,
        tokenAmountA, tokenAmountB,
        to,
        deadline,
        {
          value: tokenAmountB,
        }
      );
      this.setState({ txBeingSent: tx.hash });

      // We use .wait() to wait for the transaction to be mined. This method
      // returns the transaction's receipt.
      const receipt = await tx.wait();

      // The receipt, contains a status flag, which is 0 to indicate an error.
      if (receipt.status === 0) {
        // We can't know the exact error that made the transaction fail when it
        // was mined, so we throw this generic one.
        throw new Error("Transaction failed");
      }

      // If we got here, the transaction was successful, so you may want to
      // update your state. Here, we update the user's balance.
      await this._updateBalance();
    } catch (error) {
      // We check the error code to see if this error was produced because the
      // user rejected a tx. If that's the case, we do nothing.
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }

      // Other errors are logged and stored in the Dapp's state. This is used to
      // show them to the user, and for debugging.
      console.error(error);
      this.setState({ transactionError: error });
    } finally {
      // If we leave the try/catch, we aren't sending a tx anymore, so we clear
      // this part of the state.
      this.setState({ txBeingSent: undefined });
    }
  }
  // This method just clears part of the state.
  _dismissTransactionError() {
    this.setState({ transactionError: undefined });
  }

  // This method just clears part of the state.
  _dismissNetworkError() {
    this.setState({ networkError: undefined });
  }

  // This is an utility method that turns an RPC error into a human readable
  // message.
  _getRpcErrorMessage(error) {
    if (error.data) {
      return error.data.message;
    }

    return error.message;
  }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }

  async _addBNBTestChain() {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [BNBTestChainParams],
      });
      console.log('Custom Ethereum chain added to wallet');
    } catch (error) {
      console.error('Error adding custom chain to wallet', error);
    }
  }

  async _switchChain() {
    const chainIdHex = `0x${bnbChainId.toString(16)}`
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdHex }],
    });
    await this._initialize(this.state.selectedAddress);
  }

  // This method checks if the selected network is Localhost:8545
  async _checkNetwork() {
    if (window.ethereum.net_version !== bnbChainId) {
      // await this._addBNBTestChain();
      await this._switchChain();
    }
  }
}
