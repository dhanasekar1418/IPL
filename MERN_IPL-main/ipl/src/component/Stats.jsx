import React, { useState, useEffect } from "react";
import axios from "axios";
import TopPlayersByWickets from "./Wickets";

const TopPlayersByRuns = () => {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/players");
        const players = response.data;

        // Sort players by runs in descending order
        const sortedPlayers = players.sort((a, b) => b.runs - a.runs);

        // Get the top 10 players
        const top10Players = sortedPlayers.slice(0, 10);

        setTopPlayers(top10Players);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl text-center m-3 " >Top 10 Players by Runs</h2>
      <table className="table-fixed mx-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Runs</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.player}</td>
              <td>{player.teamname}</td>
              <td>{player.runs}</td>
              <td>{player.avg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <TopPlayersByWickets/>
    </>
  );
};

export default TopPlayersByRuns;
