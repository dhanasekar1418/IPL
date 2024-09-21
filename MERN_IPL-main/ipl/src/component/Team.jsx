import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header1";

const Team = ({ id }) => {
  const [team, updateteam] = useState("");
  const [players, updatePlayers] = useState([]);

  const filterPlayersByTeam = (teamId) => {
    return players.filter((player) => player.teamid === teamId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/players");
        const fetchedPlayers = response.data;

        updatePlayers(fetchedPlayers);

        const teamName = filterPlayersByTeam(id)[0]?.teamname || "";
        updateteam(teamName);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header name={team} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  ">
          {filterPlayersByTeam(id).map((player) => (
            <div className="shadow-2xl rounded-3xl bg-slate-300" key={player.id}>
              <img src={player.imglink} alt={player.player} />
              <div className="p-4">
                <h1 className="font-sans italic font-bold">{player.player}</h1>
                <h1>{player.role}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
