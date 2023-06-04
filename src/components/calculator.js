import { useState } from "react";
import styles from "./calculator.module.css";

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

    let numA = finalQueue.shift();
    while (finalQueue.length > 0) {
      const sign = finalQueue.shift();
      const numB = finalQueue.shift();

      switch (sign) {
        case "+":
          numA += numB;
          break;
        case "-":
          numA -= numB;
          break;
        default:
          continue;
      }
    }

    const result = numA;

    setCalcValue(result);
    setCalculatorQueue([]);
    setCalculated(true);
  };

  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const actions = [
    {
      value: "C",
      onClick: onClickClear,
    },
    {
      value: "+",
      onClick: () => onClickPlusMinus("+"),
    },
    {
      value: "-",
      onClick: () => onClickPlusMinus("-"),
    },
    {
      value: "=",
      onClick: onClickEquals,
    },
  ];

  return (
    <div className={styles.calculatorContainer}>
      <h2>Калькулятор</h2>
      <div
        className={styles.inputContainer}
        style={{ color: calculated && "green" }}
      >
        <span>{calcValue}</span>
      </div>
      {error && (
        <div className={styles.errorContainer}>
          <span>{error}</span>
        </div>
      )}
      <div className={styles.buttonsContainer}>
        {digits.map((digit) => (
          <button
            className={styles.button}
            type="button"
            key={digit}
            onClick={() => onClickDigit(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        {actions.map((action) => (
          <button
            className={styles.button}
            type="button"
            key={action.value}
            onClick={action.onClick}
          >
            {action.value}
          </button>
        ))}
      </div>
    </div>
  );
};
