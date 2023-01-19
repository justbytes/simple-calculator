import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./style/App.css";

// Imports components
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

function App() {
  const [account, setAccount] = useState();

  const loadBlockchainData = async () => {};

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navbar account={account} setAccount={setAccount} />
      <Calculator />
    </div>
  );
}

export default App;
