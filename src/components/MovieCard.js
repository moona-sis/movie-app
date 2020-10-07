import React from 'react'

function MovieCard({title,rating,poster}) {
    return (
        <div className='movie-card'>
            <img alt='movie' src={poster}/>
            <div className='movie-title'>{title}</div>
            <div className='movie-rating'><span className='rating'>Rating : </span> {rating} / 10</div>
            
        </div>
    )
}

export default MovieCard
