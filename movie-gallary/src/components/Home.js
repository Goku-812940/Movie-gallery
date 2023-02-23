import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
  return (
    <div className=''>
     <div> <img className='picture' src='https://madaboutmoviez.files.wordpress.com/2014/12/malayalam-cinema.jpg?w=3136'/>
     
     </div>
     <div className='content  ms-3'>
       <h1>M Movies</h1>
       <p className='mt-3'>Welcome to malayalam movie gallery </p>
       <Link to={'/movies'}><button className='mt-2'>Get Started</button></Link>
     
     </div>
    </div>
  )
}

export default Home
