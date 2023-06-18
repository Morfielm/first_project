import React from "react";
import PropTypes from "prop-types";

import styles from "../index.module.css";

export const Playground = ({ playGround, onClickCell }) => {
  return (
    <table
      border="0"
      cellSpacing="0"
      cellPadding="0"
      className={styles.playground}
    >
      <tbody>
        {playGround.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((cell, j) => {
                return (
                  <td key={j}>
                    <div
                      onClick={() => onClickCell(i, j)}
                      className={styles.playgroundCell}
                    >
                      {cell}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Playground.propTypes = {
  playGround: PropTypes.array.isRequired,
  onClickCell: PropTypes.func.isRequired,
};
