import React from "react";
import PropTypes from "prop-types";

export const TurnStatus = ({ players, isFirstPlayer, winner }) => {
  return (
    <div>
      {!winner ? (
        <h2>{`Сейчас ходит: ${isFirstPlayer ? players[0] : players[1]}`}</h2>
      ) : (
        <h2>{`Победил: ${winner}`}</h2>
      )}
    </div>
  );
};

TurnStatus.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFirstPlayer: PropTypes.bool.isRequired,
  winner: PropTypes.string,
};
