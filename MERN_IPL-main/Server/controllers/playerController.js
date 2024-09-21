const Player = require('../models/Player');
// const mongoose = require('mongoose')

// Create a new player
const createPlayer = async (req, res) => {
  const { id, player, role, teamid, teamname, runs, avg, sr, wickets, economy, imglink } = req.body;

  try {
    const newPlayer = new Player({
      id,
      player,
      role,
      teamid,
      teamname,
      runs,
      avg,
      sr,
      wickets,
      economy,
      imglink,
    });

    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all players
const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPlayer,
  getAllPlayers
};
