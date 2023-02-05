import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./style/App.css";

// Components
import CalculatorInterface from "./components/CalculatorInterface";
import Navbar from "./components/Navbar";

// ABI
import CALCULATOR_CONTRACT_ABI from "./abis/Calculator.json";

// Config
const CALCULATOR_CONTRACT_ADDRESS =
  "0xa79782b47d08730744d188578cdf0A5D0d62C657";

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
      CALCULATOR_CONTRACT_ADDRESS,
      CALCULATOR_CONTRACT_ABI,
      provider
    );
    setCalculator(calculator);
    console.log(calculator);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navbar account={account} setAccount={setAccount} />
      <CalculatorInterface
        provider={provider}
        account={account}
        calculator={calculator}
      />
    </div>
  );
}

export default App;
