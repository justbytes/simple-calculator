import React, { useState } from "react";

import "../style/Calculator.css";

const CalculatorInterface = ({ provider, account, calculator }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (event) => {
    setInputValue(inputValue + event.target.textContent);
  };

  const math = async () => {
    const signer = await provider.getSigner();

    await calculator.connect(signer).add(inputValue);
    // const result = await calculator.equals();
    // console.log(result);
    console.log(inputValue);
  };

  const equals = async () => {
    const signer = await provider.getSigner();
    const result = await calculator.connect(signer).equals();
    setInputValue(result);
    console.log(result);
  };

  return (
    <div className="calculator-body">
      <input
        className="calculator-input"
        type="text"
        id="input"
        value={inputValue}
        readOnly
      />
      <button className="calculator-key" onClick={handleClick}>
        1
      </button>
      <button className="calculator-key" onClick={handleClick}>
        2
      </button>
      <button className="calculator-key" onClick={handleClick}>
        3
      </button>
      <button className="calculator-key" onClick={handleClick}>
        4
      </button>
      <button className="calculator-key" onClick={handleClick}>
        5
      </button>
      <button className="calculator-key" onClick={handleClick}>
        6
      </button>
      <button className="calculator-key" onClick={handleClick}>
        7
      </button>
      <button className="calculator-key" onClick={handleClick}>
        8
      </button>
      <button className="calculator-key" onClick={handleClick}>
        9
      </button>
      <button className="calculator-key" onClick={handleClick}>
        0
      </button>
      <button className="calculator-key" onClick={equals}>
        =
      </button>
      <button className="calculator-key" onClick={() => setInputValue("")}>
        CLR
      </button>
      <button className="calculator-key" onClick={math}>
        +
      </button>
      <button className="calculator-key" onClick={handleClick}>
        -
      </button>
      <button className="calculator-key" onClick={handleClick}>
        *
      </button>
      <button className="calculator-key" onClick={handleClick}>
        /
      </button>
    </div>
  );
};

export default CalculatorInterface;
