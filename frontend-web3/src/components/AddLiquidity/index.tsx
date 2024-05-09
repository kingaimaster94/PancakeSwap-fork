import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import Web3 from "web3";
import "./index.style.css";
import { IERC20ABI, contractAddress, pancakeRouter02ABI } from "../../contracts";

const AddLiquidity = () => {
  const [loading, setLoading] = useState(false);
  const { connector, hooks } = useWeb3React();
  const { useSelectedAccount, useSelectedProvider } = hooks;
  const account = useSelectedAccount(connector);
  const provider = useSelectedProvider(connector);

  function AddLiquidity() {
    // const addLiquidity = async (toAddress:string, amountA:number, amountB:number) => {
    const addLiquidity = async () => {
      // Then, we initialize the contract using that provider and the token's
      // artifact. You can do this same thing with your contracts.
      if (provider === undefined || account === undefined) return;
      console.log("provider: ", provider);
      const signer = provider.getSigner(0);
      console.log("signer: ", signer);
      const router = new ethers.Contract(
        contractAddress.PancakeRouter,
        pancakeRouter02ABI,
        signer
      );
      console.log("router: ", router);

      const tokenPrince = new ethers.Contract(
        contractAddress.Prince,
        IERC20ABI,
        signer
      );

      const tokenWBNB = new ethers.Contract(
        contractAddress.WBNB,
        IERC20ABI,
        signer
      );

      const timestamp = (await provider.getBlock("latest")).timestamp;
      console.log("timestamp: ", timestamp);
      const deadline = timestamp + 600;
      // const deadline = Math.floor(Date.now()) + 600;
      console.log("deadline: ", deadline);
      const tokenAmountA = ethers.utils.parseEther("100");
      const tokenAmountB = ethers.utils.parseEther("0.001");

      const txApproveA = await tokenPrince.approve(
        contractAddress.PancakeRouter,
        tokenAmountA
      );
      
      await router.estimateGas
        .addLiquidityETH(
          contractAddress.Prince,
          tokenAmountA,
          tokenAmountA,
          tokenAmountB,
          "0xF8f45c23Ca9629fEB9b6273207F48b6473e71451",
          deadline,
          {
            value: tokenAmountB,
          }
        )
        .then((gasEstimate) => {
          console.log("Estimated gas:", gasEstimate.toString());
        })
        .catch((error) => {
          console.error("Error estimating gas:", error);
        });

      // const tx = await router.addLiquidityETH(
      //   contractAddress.Prince,
      //   tokenAmountA,
      //   tokenAmountA,
      //   tokenAmountB,
      //   "0xF8f45c23Ca9629fEB9b6273207F48b6473e71451",
      //   deadline,
      //   {
      //     value: tokenAmountB
      //   }
      // );
      // console.log("tsx:", tx);
    };
    addLiquidity();
  }
  useEffect(() => {
    // actually, you can implement some kinds of sign functions here
    if (account) setLoading(false);
  }, [account, provider]);

  return (
    <>
      (
      <>
        <div>
          <h4>AddLiquidity</h4>
          <form
            onSubmit={(event) => {
              AddLiquidity();
              event.preventDefault();

              const formData = new FormData();
              const toAddress = formData.get("toAddress");
              const amountA = formData.get("amountA");
              const amountB = formData.get("amountB");

              if (toAddress && amountA && amountB) {
                // addLiquidity(toAddress.toString(), amountA, amountB);
                AddLiquidity();
              }
            }}
          >
            <div className="form-group">
              <label>Amount of Prince</label>
              <input
                className="form-control"
                type="number"
                step="1"
                name="amountA"
                placeholder="1"
                required
              />
              <label>Amount of tBNB</label>
              <input className="form-control" type="float" name="amountB" />
            </div>
            <div className="form-group">
              <label>toAddress</label>
              <input
                className="form-control"
                type="text"
                name="toAddress"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-primary"
                type="submit"
                value="AddLiquidity"
              />
            </div>
          </form>
        </div>
      </>
      )
    </>
  );
};

export default AddLiquidity;
