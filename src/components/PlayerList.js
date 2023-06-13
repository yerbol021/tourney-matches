import React from "react";
import matchData from '../data/matchData';
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

function PlayerList() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;