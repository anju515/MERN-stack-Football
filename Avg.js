import { useEffect, useState } from "react"
import axios from "axios"


export default function Avg() {
    var [data, setdata] = useState([])
    var [teams, setteams] = useState([])
    var [se, setse] = useState()

    useEffect(() => {


    }, [])
    function search(w) {
        axios.get(`http://localhost:5000/avg/${w}`, {
        })
            .then(function (response) {
                console.log(response);
                setdata(response.data.data)
                setteams(response.data.data.teams)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="text-center mt-3 ms-3  text-teal-950">
                    <span className="font-bold">Enter year : </span><input type="text" className="border-2 border-teal-950 my-5 rounded-md ps-2 w-2/4" onChange={(e) => { search(e.target.value) }}></input>
                    <button className="border rounded-md px-5 mx-5 py-1 text-white bg-cyan-950">Search</button>

                </div>
            </div>

            <div className="bg-indigo-100 rounded-xl p-4 mx-4">
                <div>
                    <table className="w-full">
                        <tr className=" bg-gray-800 text-white text-xl">
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

                        </tr>
                        {
                            teams.map((e, index) => {
                                return (
                                    <>
                                        <tr className="border border-gray-300">
                                            <td>{index + 1}</td>
                                            <td>{e.teams}</td>
                                            <td>{e.gamesPlayed}</td>
                                            <td>{e.win}</td>
                                            <td>{e.draw}</td>
                                            <td>{e.loss}</td>
                                            <td>{e.goalsFor}</td>
                                            <td>{e.goalsAgainst}</td>
                                            <td>{e.points}</td>
                                            <td>{e.matchYear}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
                <div>
                    <table className="my-3 ms-3">
                        <tr>
                            <td className="border-2 border-black text-left px-3">Total teams</td>
                            <td className="border-2 border-black text-left px-3">{data.len}</td>
                        </tr>

                        <tr>
                            <td className="border-2 border-black text-left px-3">TotalGoalsFor</td>
                            <td className="border-2 border-black text-left px-3">{data.totalGoalsFor}</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black text-left px-3">TotalAvg</td>
                            <td className="border-2 border-black text-left px-3">{data.totalAvg}</td>
                        </tr>

                    </table>
                </div>
            </div>

        </>
    )
}