const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    pm_am: { type: String, required: true },
    home_team: { type: String, required: true },
    away_team: { type: String, required: true },
    venue: { type: String, required: true },
    logo_home_team: { type: String, required: true },
    logo_away_team: { type: String, required: true },
});

module.exports = mongoose.model('DataModel', scheduleSchema);
