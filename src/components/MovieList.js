import React from 'react'
import MovieCard from './MovieCard'

function MovieList({data}) {
    return (
        
<div className='list-content'>
        <div className='movie-list'>
          {data.map ((elem,index) =>{  
        return    <MovieCard data ={data}
        key={index}
        title={elem.Title}
        rating={elem.Ratings}
        poster ={elem.Poster}/>
    })}
        </div>
        </div>
    )
}

export default MovieList
