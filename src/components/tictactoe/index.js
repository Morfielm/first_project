import React, { useEffect, useState, useCallback } from "react";
import styles from "./index.module.css";

import { Playground } from "./components/playground";
import { TurnStatus } from "./components/turn-status";

const Players = ["X", "O"];

export const Tictactoe = () => {
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [playGround, setPlayGround] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const checkWinner = useCallback(
    (player) => {
      let win = false;
      playGround.forEach((row) => {
        if (!win) {
          win = row.every((cell) => cell === player);
        }
      });

      for (let i = 0; i < playGround[0].length; i++) {
        let column = [];
        for (let j = 0; j < playGround.length; j++) {
          column.push(playGround[j][i]);
        }
        if (!win && column.every((cell) => cell === player)) {
          win = true;
          break;
        }
      }

      let leftDiagonal = [];
      let rightDiagonal = [];
      for (let i = 0; i < playGround[0].length; i++) {
        for (let j = 0; j < playGround.length; j++) {
          if (i === j) {
            leftDiagonal.push(playGround[j][i]);
          }
          if (i + j === playGround.length - 1) {
            rightDiagonal.push(playGround[j][i]);
          }
        }
      }
      if (!win && leftDiagonal.every((cell) => cell === player)) {
        win = true;
      }
      if (!win && rightDiagonal.every((cell) => cell === player)) {
        win = true;
      }

      if (win) {
        setWinner(player);
      }
    },
    [playGround]
  );

  useEffect(() => {
    checkWinner("x");
    checkWinner("o");
  }, [playGround, checkWinner]);

  const onClickCell = (i, j) => {
    let sym = "x";
    if (!isFirstPlayerTurn) {
      sym = "o";
    }

    const newPlayground = [
      [...playGround[0]],
      [...playGround[1]],
      [...playGround[2]],
    ];
    if (newPlayground[i][j] === "" && !winner) {
      newPlayground[i][j] = sym;
      setPlayGround(newPlayground);
      setIsFirstPlayerTurn((prevValue) => !prevValue);
    }
  };

  const restart = () => {
    setIsFirstPlayerTurn(true);
    setPlayGround([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner("");
  };

  return (
    <div className={styles.container}>
      <h1>Крестики нолики</h1>
      <TurnStatus
        players={Players}
        isFirstPlayer={isFirstPlayerTurn}
        winner={winner}
      />
      <Playground playGround={playGround} onClickCell={onClickCell} />
      {winner && <div className={styles.resetButton} onClick={restart}>Начать заново</div>}
    </div>
  );
};
