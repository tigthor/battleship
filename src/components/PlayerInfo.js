import React from "react";

const PlayerInfo = ({ playerData }) => {
  return (
    <div className="player-info">
      {playerData.map((player, index) => (
        <div key={index} className={`player-${index + 1}`}>
          <h3>{player.score}</h3>
          <hr/>
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerInfo;
