import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DataMovie from './DataMovie'
import MovieCard from './MovieCard';
 
const Details = () => {
    let {movieId} = useParams();
    const data = DataMovie.find(movie=>movie.id==movieId)
    return (
        
        <div className='details'>
            <div>
                <MovieCard title = {data.title} image = {data.image} rate = {data.rate} id = {data.id}/>
                <div>
                    <h1>Genre : {data.genre}</h1>
                    <h2>Runtime : {data.runtime}</h2>
                    <p>Description : {data.description}</p>
                </div>
            </div>
            
            
            <Link to = '/'>
                <button>Exit</button>
            </Link>
                   
               
        </div>
    )
}

export default Details
