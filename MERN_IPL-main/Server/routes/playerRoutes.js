const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Create a new player
router.post('/players', playerController.createPlayer);

// Get all players
router.get('/players', playerController.getAllPlayers);

module.exports = router;
