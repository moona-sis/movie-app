import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/MovieList'


const MOVIES= [
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings:  7
  },
  {
    Title: "The Last Days of American Crime",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTAzMjhiOWQtZDkzMy00NmNiLWE1ZTEtYTJmNDIzMzhmZGQyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Ratings:  9
  },
  {
    Title: "John wick Vol. 3",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Ratings:  8
  },
  {
    Title: "Hangover",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings:  6
  },
  {
    Title: "Wonder Woman",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    Ratings:  8
  },
  {
    Title: "La Terre et le Sang",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings:  9
  },
  {
    Title: "Les Schtroumpfs et le Village perdu",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTg1NjgyMTYzM15BMl5BanBnXkFtZTgwMzIxNDc4MDI@._V1_SX300.jpg",
    Ratings:  6
  },
  {
    Title: "After Earth",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTY3MzQyMjkwMl5BMl5BanBnXkFtZTcwMDk2OTE0OQ@@._V1_SX300.jpg",
    Ratings:  7
  },
  {
    Title: "CHiPs",
    Poster: "https://m.media-amazon.com/images/M/MV5BZTliN2IyMTctYTliOS00ZTJiLTkxN2YtNDg1YTJiZTA4MTVlL2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Ratings:  4
  },
  {
    Title: "Aviator",
    Poster: "https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings:  9
  }
      
]

function App() {
  const[movies, setMovies] = useState(MOVIES)
  const [search, setSearch] = useState('')
  const [filtredMovies, setFiltredMovies] = useState([])
  
  
  
  useEffect(() => {
    setFiltredMovies ( MOVIES.filter(elem => elem.Title.toLowerCase().includes(search.toLowerCase()))

    )
    
  }, [search, movies])
  
  
  return (
    <div className="App">
      <div className='container'>
        <div className='title'>House of Movies</div>
      <div>
      
      <input type ='text' placeholder='search' onChange={e=> setSearch(e.target.value)}/>
      </div>
      </div>
      
     <MovieList data={filtredMovies}/> 
     
    </div>
  );
}

export default App;
