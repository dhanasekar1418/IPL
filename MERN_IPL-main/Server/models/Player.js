const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  teamid: {
    type: Number,
    required: true,
  },
  teamname: {
    type: String,
    required: true,
  },
  runs: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  sr: {
    type: Number,
    required: true,
  },
  wickets: {
    type: Number,
    required: true,
  },
  economy: {
    type: Number,
    required: true,
  },
  imglink: {
    type: String,
    required: true,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
