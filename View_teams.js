import { useEffect, useState } from "react"
import axios from "axios"
import Spinning from "./spinning"

export default function View_teams() {
  var [data, setdata] = useState()

  useEffect(() => {
    axios.get('http://localhost:5000/', {
    })
      .then(function (response) {
        console.log(response);
        setdata(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  function del(id) {
    if (window.confirm('Are you sure want to delete?')) {
      axios.delete(`http://localhost:5000/delete-team/${id}`, {
      })
        .then(function (response) {
          alert(response.data.status)
          console.log(response);
          window.location.reload()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  function win(w) {
    axios.get(`http://localhost:5000/teams/${w}`, {
    })
      .then(function (response) {
        console.log(response);
        setdata(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  return (
    <div className="m-4">
      {
        data ? <div className="bg-indigo-100 rounded-xl p-4">
          <div className="text-center container m-5 mx-auto bg-indigo-100 rounded-xl">
            <span className="font-bold text-teal-950">Search by win : </span>
            <input type="text" className="border-2 border-teal-900 rounded-md ps-2  w-2/4" onChange={(e) => { win(e.target.value) }}></input>
            <button className="border rounded-md px-5 mx-5 py-1 text-white bg-cyan-900">Search</button>
          </div>
          <div className="container mx-auto">
            <table className="w-full text-center border-black">
              <thead>
                <tr className="bg-gray-800 text-white text-xl border border-gray-200">
                  <td>Index</td>
                  <td>Teams</td>
                  <td>GamesPlayed</td>
                  <td>Win</td>
                  <td>Draw</td>
                  <td>Loss</td>
                  <td>GoalsFor</td>
                  <td>GoalsAgainst</td>
                  <td>Points</td>
                  <td>MatchYear</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((e, index) => {
                    return (
                      <>
                        <tr className="border border-gray-200">
                          <td>{index + 1}</td>
                          <td className="text-left">{e.teams}</td>
                          <td>{e.gamesPlayed}</td>
                          <td>{e.win}</td>
                          <td>{e.draw}</td>
                          <td>{e.loss}</td>
                          <td>{e.goalsFor}</td>
                          <td>{e.goalsAgainst}</td>
                          <td>{e.points}</td>
                          <td>{e.matchYear}</td>
                          <td><a href={'edit/' + e._id}><button className="px-2 y-1 rounded-md bg-cyan-700 text-white my-1 ">Edit</button></a></td>
                          <td><button className="px-2 y-1 rounded-md bg-red-700 text-white my-1 " onClick={() => { del(e._id) }}>Delete</button></td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

        </div> : <div className="flex justify-center"><Spinning /></div>
      }
    </div>
  )
}