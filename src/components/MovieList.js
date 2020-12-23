import React from 'react'

import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    
    return (
        <div className='list'>

            {movies.map(movie=>{
                return (
                    <div key ={movie.id} >
                        <MovieCard title = {movie.title} image = {movie.image} rate = {movie.rate} id = {movie.id}/>  
                    </div>
                    )
                })
            } 
            
        </div>
    )
}

export default MovieList
