const { expect } = require("chai");
const { ethers, artifacts } = require("hardhat");

describe("Simple Calculator", () => {
  describe("Deployment", async () => {
    // Deploy Smart Contract
    it("Contract is deployed", async () => {
      const Calculator = await ethers.getContractFactory("Calculator");
      calculator = await Calculator.deploy();
      await calculator.deployed();
    });

    describe("Calculator Functionality", async () => {
      beforeEach(async () => {
        const result = await calculator.clearResults();
        await result.wait();
      });
      it("Performs addition", async () => {
        await calculator.add(15);
        const result = await calculator.getResults();
        expect(result).to.equal(15);
      });
      it("Performs subtraction", async () => {
        await calculator.subtract(5);
        const result = await calculator.getResults();
        expect(result).to.equal(-5);
      });
    });
  });

  // it("Performs subtraction", async () => {});
  // it("Performs multiplication", async () => {});
  // it("Performs divison", async () => {});
});
