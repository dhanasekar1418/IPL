const express = require('express')
const router = express.Router()
const scheduleController = require('../controllers/scheduleController')

router.route('/')
    .get(scheduleController.getAllMatches)
    .post(scheduleController.addMatch)
    .patch(scheduleController.updateMatch)
    .delete(scheduleController.deleteMatch)

module.exports = router