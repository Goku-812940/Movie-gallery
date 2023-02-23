import React, { useState } from 'react'
import "./movie.css";
import {Link, useNavigate} from"react-router-dom"
import axios from "axios"


function Movie(props) {
    
  const { _id, name, year, rating, duration, gener, director, about, streaming_in, image_url } = props.movie;

  
  const deleteMovie = async () => {
    await axios
      .delete(`http://localhost:5000/movies/${_id}`)
      .then((res) => res.data)
      .then(()=> alert("Movie Deleted Succesfully"))
      .then(()=>window.location.reload(false)  )   
      
  };

  return (

 
        <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={image_url}/></div>
                <div class="col-md-6 mt-1">
                    <h5 className='mt-4'>{name}</h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2">IMDb</div><span className='ms-3'>{rating}/10</span>
                    </div>
                    <div class="mt-1 mb-1 spec-1"><span>{year}</span><span class="dot"></span><span>{duration}</span><span class="dot"></span><span>{gener}</span></div>
                    
                    <p class="text-justify mt-3 mb-0">{about}</p>

                    <p class="text-justify mt-3 mb-0">Directed By :<span className='ms-2'>{director}</span></p>
                    <h6 class=" mt-2">Watch on :<span className='text-success ms-2'>{streaming_in}</span></h6>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    
                   
                    <div class="d-flex flex-column mt-4 ">
                    <Link to={`/moviedetails/${_id}`}><button class="btn btn-sm btttn" type="button">Update</button></Link >
                    <button onClick={deleteMovie} class="btn btn-sm btttn mt-2" type="submit">Delete</button></div>
                </div>
            </div>
            </div>
   
        


  )
}

export default Movie

