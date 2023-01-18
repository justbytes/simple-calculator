const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Calculator", () => {
  describe("Deployment", async () => {
    // Deploy Smart Contract
    it("Contract is deployed", async () => {
      const Calculator = await ethers.getContractFactory("Calculator");
      calculator = await Calculator.deploy();
      await calculator.deployed();
    });
  });
});
