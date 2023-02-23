import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Movie from './Movie'
import './movie.css'
import Form from 'react-bootstrap/Form';



const url = "http://localhost:5000/movies"

const getallMovies = async () => {
  return await axios.get(url).then((res) => res.data)
}

function Movies() {
  const [searchTerm,setSearchTerm] =useState("");

  const [movies, setmovies] = useState()
  useEffect(() => {
    getallMovies().then(data => setmovies(data.movies))
  }, [])
  console.log(movies)
  return (


    <>

      <div className='mb-5'>
      <div className='disp mb-5' >
        <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Movies..."
                className="me-2"
                aria-label="Search"
                onChange={(event)=>{
                  setSearchTerm(event.target.value)
                }}
              />
              <button className='searchbtn'>Search</button>
            </Form>
      </div >
        <div class="container  mb-5">

          {movies && movies.filter((movie)=>{
            if (searchTerm == ""){
              return movie
            }else if(movie.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return movie
            }
          }).map((movie, i) => (
            <div class="d-flex justify-content-center row mt-5" key={i}>
              <Movie movie={movie} />
            </div>

          ))}
        </div>
      </div >
    </>






  )
}

export default Movies

// rgba(255,255,255,255)

// rgba(240,237,233,255)

// rgba(71,158,71,255)

// rgba(218,110,93,255)
