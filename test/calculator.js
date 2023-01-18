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
      // Sets inital result to 0
      beforeEach(async () => {
        const result = await calculator.clear();
        await result.wait();
      });
      it("Performs addition", async () => {
        // Adds 15 to 0
        await calculator.add(15);
        const result = await calculator.equals();
        expect(result).to.equal(15);
      });
      it("Performs subtraction", async () => {
        // Substracts 5 from 0
        await calculator.subtract(5);
        const result = await calculator.equals();
        expect(result).to.equal(-5);
      });
      it("Performs multiplication", async () => {
        // Adds 15 to 0
        await calculator.add(15);
        // Multiplies 2 by 15
        await calculator.multiply(2);
        const result = await calculator.equals();
        expect(result).to.equal(30);
      });
      it("Performs divison", async () => {
        // Sets intial value to -50
        await calculator.add(-50);
        // Divide 2 by -50
        await calculator.divide(2);
        const result = await calculator.equals();
        expect(result).to.equal(-25);
      });
    });
  });
});
