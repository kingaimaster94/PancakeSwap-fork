import React from "react";
import { Web3ReactProvider } from "@web3-react/core";

import MetaMaskBtn from "./components/MetaMaskBtn";
import AddLiquidity from "./components/AddLiquidity";
import { connectors } from "./connectors";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MetaMaskBtn />
        </header>
      </div>
      <body>
        <AddLiquidity />
      </body>
    </Web3ReactProvider>
  );
}

export default App;
