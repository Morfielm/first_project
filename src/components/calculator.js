import { useState } from "react";

export const Calculator = () => {
  const [calcValue, setCalcValue] = useState("");
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState("");

  const [calculatorQueue, setCalculatorQueue] = useState([]);

  const onClickDigit = (digit) => {
    if (calcValue === "+" || calcValue === "-") {
      setCalcValue(digit);
    } else {
      setCalcValue(calcValue + digit);
    }
    setCalculated(false);
    setError("");
  };

  const onClickPlusMinus = (sign) => {
    if (calcValue.length === 0 || calcValue === "+" || calcValue === "-") {
      return;
    }
    setCalculatorQueue((prevValue) => [...prevValue, +calcValue, sign]);
    setCalcValue(sign);
    setCalculated(false);
    setError("");
  };

  const onClickClear = () => {
    setCalculatorQueue([]);
    setCalcValue("");
    setCalculated(false);
    setError("");
  };

  const onClickEquals = () => {
    if (calcValue.length === 0 || calcValue === "+" || calcValue === "-") {
      setError("Ошибка в формуле или формула пуста");
      return;
    }
    const finalQueue = [...calculatorQueue, +calcValue];

    const result = eval(finalQueue.join(""))

    setCalcValue(result);
    setCalculatorQueue([]);
    setCalculated(true);
  };

  const buttons = [
    {
      value: "C",
      onClick: () => onClickClear(),
    },
    {
      value: "1",
      onClick: () => onClickDigit("1"),
    },
    {
      value: "2",
      onClick: () => onClickDigit("2"),
    },
    {
      value: "3",
      onClick: () => onClickDigit("3"),
    },
    {
      value: "+",
      onClick: () => onClickPlusMinus("+"),
    },
    {
      value: "4",
      onClick: () => onClickDigit("4"),
    },
    {
      value: "5",
      onClick: () => onClickDigit("5"),
    },
    {
      value: "6",
      onClick: () => onClickDigit("6"),
    },
    {
      value: "-",
      onClick: () => onClickPlusMinus("-"),
    },
    {
      value: "7",
      onClick: () => onClickDigit("7"),
    },
    {
      value: "8",
      onClick: () => onClickDigit("8"),
    },
    {
      value: "9",
      onClick: () => onClickDigit("9"),
    },
    {
      value: "=",
      onClick: () => onClickEquals(),
    },
    {
      value: "0",
      onClick: () => onClickDigit("0"),
    },
  ];

  return (
    <div className="calculator-container">
      <h2>Калькулятор</h2>
      <div className="input-container" style={{color: calculated && 'green'}}>
        <span>{calcValue}</span>
      </div>
      {error && (
        <div className="error-container">
          <span>{error}</span>
        </div>
      )}
      <div className="button-container">
        {buttons.map((button) => (
          <button type="button" key={button.value} onClick={button.onClick}>
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
};
