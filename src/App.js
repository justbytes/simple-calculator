import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./style/App.css";

// Imports components

import Calculator from "./components/Calculator";

function App() {
  const [account, setAccount] = useState();
  // Connect and retrive account from metamask
  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };
  // Call for getting accounts
  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      {account}
      <Calculator />
    </div>
  );
}

export default App;
