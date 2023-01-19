import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./style/App.css";

// Components
import CalculatorInterface from "./components/Calculator";
import Navbar from "./components/Navbar";

// ABI
import Calculator from "./abis/Calculator.json";

// Config
import config from "./config.json";

function App() {
  const [provider, setProvider] = useState();
  const [calculator, setCalculator] = useState();
  const [account, setAccount] = useState();

  const loadBlockchainData = async () => {
    //Connect to blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    //Get network
    const network = await provider.getNetwork();

    // Create JavaScript version of smart contract
    const calculator = new ethers.Contract(
      config[network.chainId].calculator.address,
      Calculator,
      provider
    );
    setCalculator(calculator);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navbar account={account} setAccount={setAccount} />
      <CalculatorInterface />
    </div>
  );
}

export default App;
