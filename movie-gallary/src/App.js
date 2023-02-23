import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddMovie from './components/AddMovie';
import Home from './components/Home';
import Movies from './components/Movie/Movies'
import MovieDetails from './components/Movie/MovieDetails';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/addmovie' element={<AddMovie/>}/>
        <Route path="/moviedetails/:id" element={<MovieDetails/>}/>

      </Routes>

      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
