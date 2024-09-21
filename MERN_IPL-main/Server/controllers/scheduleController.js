const Match = require('../models/Schedule'); // Update the path to your actual model file

// Get all matches
const getAllMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.json(matches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new match
const addMatch = async (req, res) => {
    const match = new Match({
        id: req.body.id,
        date: req.body.date,
        time: req.body.time,
        pm_am: req.body['pm/am'],
        home_team: req.body.home_team,
        away_team: req.body.away_team,
        venue: req.body.venue,
        logo_home_team: req.body.logo_home_team,
        logo_away_team: req.body.logo_away_team,
    });

    try {
        const newMatch = await match.save();
        res.status(201).json(newMatch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a match
const updateMatch = async (req, res) => {
    try {
        const match = await Match.findById(req.params.id);

        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }

        match.set(req.body);
        const updatedMatch = await match.save();

        res.json(updatedMatch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a match
const deleteMatch = async (req, res) => {
    try {
        const match = await Match.findById(req.params.id);

        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }

        await match.remove();
        res.json({ message: 'Match deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllMatches,
    addMatch,
    updateMatch,
    deleteMatch,
};
