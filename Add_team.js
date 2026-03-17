import { useEffect, useState } from "react"
import axios from "axios"

export default function Add_team() {

  var [teams, setteams] = useState()
  var [gamesPlayed, setgamesPlayed] = useState()
  var [win, setwin] = useState()
  var [draw, setdraw] = useState()
  var [loss, setloss] = useState()
  var [goalsFor, setgoalsFor] = useState()
  var [goalsAgainst, setgoalsAgainst] = useState()
  var [points, setpoints] = useState()
  var [matchYear, setmatchYear] = useState()

  useEffect(() => {
  }, [])

  function send_data() {
    axios.post('http://localhost:5000/add-team', {
      teams: teams,
      gamesPlayed: gamesPlayed,
      win: win,
      draw: draw,
      loss: loss,
      goalsFor: goalsFor,
      goalsAgainst: goalsAgainst,
      points: points,
    })
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
      <div className="container mx-auto  ms-10">
        <div className=" ">
          <h1 className="text-3xl font-bold mb-8">Add Teams and statistics</h1>
          <table className="text-left w-80 mx-auto">
            <tr>
              <td><lable className="my-1 block">Team: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setteams(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">GamesPlayed: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setgamesPlayed(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">Win: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setwin(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">Draw: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setdraw(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">Loss: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setloss(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">GoalsFor: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setgoalsFor(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">GoalsAgainst: </lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setgoalsAgainst(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td><lable className="my-1 block">Points:</lable></td>
              <td><input type='text' className="border border-teal-950 rounded-md ms-6 ps-2" onChange={(e) => { setpoints(e.target.value) }}></input></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="bg-cyan-800 px-2 py-1 text-white rounded-md ms-6 mt-1 w-48" onClick={() => { send_data() }}>Add Team</button>
              </td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  )
}