import React, { useState } from "react";
import axios from "axios";

const PlayerForm = () => {
    const [playerData, setPlayerData] = useState({
        id: "",
        player: "",
        role: "",
        teamid: "",
        teamname: "",
        runs: "",
        avg: "",
        sr: "",
        wickets: "",
        economy: "",
        imglink: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/players",
                playerData
            );
            console.log("Player data posted successfully:", response.data);
            // Reset the form after successful submission
            setPlayerData({
                id: "",
                player: "",
                role: "",
                teamid: "",
                teamname: "",
                runs: "",
                avg: "",
                sr: "",
                wickets: "",
                economy: "",
                imglink: ""
            });
        } catch (error) {
            console.error("Error posting player data:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Player ID:
                    <input
                        type="text"
                        name="id"
                        value={playerData.id}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Player Name:
                    <input
                        type="text"
                        name="player"
                        value={playerData.player}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Role:
                    <input
                        type="text"
                        name="role"
                        value={playerData.role}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Team ID:
                    <input
                        type="text"
                        name="teamid"
                        value={playerData.teamid}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Team Name:
                    <input
                        type="text"
                        name="teamname"
                        value={playerData.teamname}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Runs:
                    <input
                        type="text"
                        name="runs"
                        value={playerData.runs}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Average:
                    <input
                        type="text"
                        name="avg"
                        value={playerData.avg}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Strike Rate:
                    <input
                        type="text"
                        name="sr"
                        value={playerData.sr}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Wickets:
                    <input
                        type="text"
                        name="wickets"
                        value={playerData.wickets}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Economy:
                    <input
                        type="text"
                        name="economy"
                        value={playerData.economy}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Image Link:
                    <input
                        type="text"
                        name="imglink"
                        value={playerData.imglink}
                        onChange={handleChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    );
    
};

export default PlayerForm;
