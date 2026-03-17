const fcmodel = require('../model/FootballSchema')

exports.addTeam = async (req, res) => {
  try {
    var year = new Date().getFullYear();
    req.body.matchYear = year
    const data = await fcmodel.create(req.body)
    res.status(200).json({
      status: "Team Added",
      data
    })
  } catch (error) {
    res.status(500).json({
      status: "Failed...."
    })
    console.log(error)
  }
}

exports.viewTeam = async (req, res) => {
  try {
    const data = await fcmodel.find()
    const totalMatch = data.length
    res.status(200).json({
      status: "success",
      data,
      totalMatch: totalMatch
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.statistics = async (req, res) => {
  try {
    var year = await fcmodel.find({ "matchYear": req.params.year })
    var gamesPlayed = 0;
    var draw = 0;
    var win = 0;
    year.forEach(e => {
      gamesPlayed += e.gamesPlayed
      draw += e.draw
      win += e.win
    });
    var data ={
      totalMatch : year.length,
      teams : year,
      gamesPlayed:gamesPlayed,
      draw:draw,
      win:win
    }
    res.status(200).json({
      status: "success",
     data
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}
exports.singleteam =async(req,res)=>{
  try {
    const data = await fcmodel.findById(req.params.id)
    res.status(200).json({
      status: "Team Update search",
      data
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}
exports.updateTeam = async (req, res) => {
  try {
    await fcmodel.findByIdAndUpdate(req.params.id, req.body)
    const data = await fcmodel.findById(req.params.id)
    res.status(200).json({
      status: "Team Updated",
      data
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.deleteTeam = async (req, res) => {
  try {
    await fcmodel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "Team Deleted",
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.limitSkip = async (req, res) => {
  try {
    let page = Number(req.query.page) || 1;
    let skip = (page - 1) * 10
    const data = await fcmodel.find({ "win": { $gt: req.params.win } }).limit(10).skip(skip)
    res.status(200).json({
      status: "success",
      data
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.avgGoalFor = async (req, res) => {
  try {
    var year = await fcmodel.find({ "matchYear": req.params.year })
    var goal = 0;
    year.forEach(yrr => {
      goal += yrr.goalsFor
    });
    var avg = parseFloat(goal / year.length);
    // var year = await fcmodel.aggregate([{ "$project": { year: { $substr: ["$matchYear", 0, 4] } } }])
    // const data = await fcmodel.aggregate([{ $group: { _id: year, avgGoal: { $avg: "$goalsFor" } } }])
    var data={
      teams: year,
      len: year.length,
      totalGoalsFor: goal,
      totalAvg: avg
    }
    res.status(200).json({
      status: "success",
     data
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
    console.log(err)
  }
} 
