import React from "react"; //optional
import matchData from "../data/matchData";
import Match from "./Match";

function MatchList() {
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match />
    </section>
  );
}

export default MatchList;