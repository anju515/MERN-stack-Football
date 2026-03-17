import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Edit() {

  var [teams, setteams] = useState()
  var [gamesPlayed, setgamesPlayed] = useState()
  var [win, setwin] = useState()
  var [draw, setdraw] = useState()
  var [loss, setloss] = useState()
  var [goalsFor, setgoalsFor] = useState()
  var [goalsAgainst, setgoalsAgainst] = useState()
  var [points, setpoints] = useState()
  var [matchYear, setmatchYear] = useState()

  var id = useParams(id)
  useEffect(() => {
    axios.get(`http://localhost:5000/single-team/${id.id}`
    )
      .then(function (response) {
        setteams(response.data.data.teams)
        setgamesPlayed(response.data.data.gamesPlayed)
        setwin(response.data.data.win)
        setdraw(response.data.data.draw)
        setloss(response.data.data.loss)
        setgoalsFor(response.data.data.goalsFor)
        setgoalsAgainst(response.data.data.goalsAgainst)
        setpoints(response.data.data.points)
        setmatchYear(response.data.data.matchYear)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  function send_data() {
    axios.patch(`http://localhost:5000/update-team/${id.id}`, {
      teams: teams,
      gamesPlayed: gamesPlayed,
      win: win,
      draw: draw,
      loss: loss,
      goalsFor: goalsFor,
      goalsAgainst: goalsAgainst,
      points: points,
      matchYear: matchYear
    }
    )
      .then(function (response) {
        alert(response.data.status)
        console.log(response);
        window.location.reload()
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }
  return (
    <div className="bg-indigo-100 rounded-xl p-4 m-4">
      <div className=" ms-10">
        <h1 className="text-3xl font-bold mb-10">Update Teams and statistics</h1>
        <table className="text-left" align="center">
          <tr>
            <td><lable className="my-1 block">Team: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={teams} onChange={(e) => { setteams(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">GamesPlayed: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={gamesPlayed} onChange={(e) => { setgamesPlayed(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">Win: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={win} onChange={(e) => { setwin(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">Draw: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={draw} onChange={(e) => { setdraw(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">Loss: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={loss} onChange={(e) => { setloss(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">GoalsFor: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={goalsFor} onChange={(e) => { setgoalsFor(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">GoalsAgainst: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={goalsAgainst} onChange={(e) => { setgoalsAgainst(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">Points: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={points} onChange={(e) => { setpoints(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td><lable className="my-1 block">MatchYear: </lable></td>
            <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" value={matchYear} onChange={(e) => { setmatchYear(e.target.value) }}></input></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="bg-cyan-800 px-2 py-1 text-white rounded-md ms-6 mt-1 w-48" onClick={() => { send_data() }}>Update</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}