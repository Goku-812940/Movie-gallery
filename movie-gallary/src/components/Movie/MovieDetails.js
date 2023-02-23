import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './moviedetails.css'




function MovieDetails() {
  const [inputs, setInputs] = useState();
  const id = useParams().id
  const history = useNavigate ();
  const url = `http://localhost:5000/movies/${id}`


  useEffect(() => {
   const getmovies = async () => {
      await axios.get(url).then(res => res.data)
        .then((data) => setInputs(data.movie))
    };
    getmovies();
  }, [id])


  const sendRequest= async () => {
    await axios
      .put(url, {
        name: String(inputs.name),
        year: Number(inputs.year),
        rating: Number(inputs.rating),
        duration: String(inputs.duration),
        gener: String(inputs.gener),
        director: String(inputs.director),
        about: String(inputs.about),
        streaming_in: String(inputs.streaming_in),
        image_url: String(inputs.image_url)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
    .then(()=> alert("Movie Updated"))
    .then(() => history("/movies"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (


    <div>
      <div className='mt-5 pt-4 center'><h2>Update Movie</h2></div>
      <div className='container  '>
        <div className='p-4'>
      {inputs && (

        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label >Name</label>
            <input type="text" value={inputs.name}
              onChange={handleChange} class="form-control" placeholder="movie name" name='name' />
          </div>
          <div class="form-group">
            <label >Year Of Release</label>
            <input type="number" value={inputs.year}
              onChange={handleChange} class="form-control" placeholder="Release year" name='year' />
          </div>
          <div class="form-group">
            <label >Rating</label>
            <input type="number" value={inputs.rating}
              onChange={handleChange} class="form-control" placeholder="Rating" name='rating' />
          </div>
          <div class="form-group">
            <label >Duration</label>
            <input type="text" value={inputs.duration}
              onChange={handleChange} class="form-control" placeholder="duration" name='duration' />
          </div>
          <div class="form-group">
            <label >Genres</label>
            <input type="text" value={inputs.gener}
              onChange={handleChange} class="form-control" placeholder="Generes" name='gener' />
          </div>
          <div class="form-group">
            <label >Director</label>
            <input type="text" value={inputs.director}
              onChange={handleChange} class="form-control" placeholder="Director" name='director' />
          </div>
          <div class="form-group">
            <label >About</label>
            <input type="text" value={inputs.about}
              onChange={handleChange} class="form-control" placeholder="Description" name='about' />
          </div>
          <div class="form-group">
            <label >Streaming In</label>
            <input type="text" value={inputs.streaming_in}
              onChange={handleChange} class="form-control" placeholder="Streaming platform" name='streaming_in' />
          </div>
          <div class="form-group">
            <label >Image Url</label>
            <input type="text" value={inputs.image_url}
              onChange={handleChange} class="form-control" placeholder="url" name='image_url' />
          </div>

          <button type="submit" class="btnn mt-4">update Movie</button>
        </form>
      )}
      </div>
      </div>
    </div>


  )
}

export default MovieDetails


