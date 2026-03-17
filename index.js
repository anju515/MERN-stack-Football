var express = require('express');
const football = require('../controller/FootballController');
var router = express.Router();

/* GET home page. */
router.get('/', football.viewTeam);
router.post('/add-team', football.addTeam);
router.get('/single-team/:id', football.singleteam);
router.patch('/update-team/:id', football.updateTeam);
router.delete('/delete-team/:id', football.deleteTeam);
router.get('/teams/:win', football.limitSkip);
router.get('/statistics/:year', football.statistics);
router.get('/avg/:year', football.avgGoalFor);

module.exports = router;
