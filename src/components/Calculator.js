import React, { useState } from "react";
import "../style/Calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (event) => {
    setInputValue(inputValue + event.target.textContent);
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
      <button className="calculator-key">=</button>
      <button className="calculator-key" onClick={() => setInputValue("")}>
        CLR
      </button>
      <button className="calculator-key">+</button>
      <button className="calculator-key">-</button>
      <button className="calculator-key">X</button>
      <button className="calculator-key">/</button>
    </div>
  );
}

export default Calculator;
