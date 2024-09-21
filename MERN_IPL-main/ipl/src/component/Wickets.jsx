import React, { useState, useEffect } from "react";
import axios from "axios";

const TopPlayersByWickets = () => {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/players");
        const players = response.data;

        // Sort players by wickets in descending order
        const sortedPlayers = players.sort((a, b) => b.wickets - a.wickets);

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
    <div className="flex flex-col justify-center" >
      <h2 className="text-4xl text-center m-3 ">Top 10 Players by Wickets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Wickets</th>
            <th>Economy</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.player}</td>
              <td>{player.teamname}</td>
              <td>{player.wickets}</td>
              <td>{player.economy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPlayersByWickets;
