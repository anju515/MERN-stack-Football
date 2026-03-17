import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-cyan-950 mt-2 shadow-lg rounded-2xl mx-4'>
      <div className="container mx-auto">
        <div className='flex-column lg:flex justify-between align-middle pb-4 '>
          <div>
            <h1 className='px-4 py-1 mt-4 ms-3 text-2xl font-bold drop-shadow-lg text-white'>FC Dashboard</h1>
          </div>
          <div>
            <Link to={'/'}><button className="bg-teal-600 px-5 py-1 mt-5 ms-3 text-white rounded-full shadow-lg">Home</button></Link>
            <Link to={'/view-teams'}><button className="bg-teal-600 px-5 py-1 mt-5 ms-3 text-white rounded-full shadow-lg">Teams</button></Link>
            <Link to={'/statistics'}><button className="bg-teal-600 px-5 py-1 mt-5 ms-3 text-white rounded-full shadow-lg">Statistics</button></Link>
            <Link to={'/avg'}><button className="bg-teal-600 px-5 py-1 mt-5 ms-3 text-white rounded-full shadow-lg">Average</button></Link>
            <Link to={'/add-team'}><button className="bg-teal-600 px-5 py-1 mt-5 ms-3 text-white rounded-full shadow-lg">Add Team</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
