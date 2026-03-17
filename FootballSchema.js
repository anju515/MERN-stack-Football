const mongoose = require('mongoose')
const fcSchema = new mongoose.Schema({
  teams: { type: String },
  gamesPlayed: { type: Number },
  win: { type: Number },
  draw: { type: Number },
  loss: { type: Number },
  goalsFor: { type: Number },
  goalsAgainst: { type: Number },
  points: { type: Number },
  matchYear: {
    type: String
    // default: Date.now
  }
})
module.exports = mongoose.model('data', fcSchema);