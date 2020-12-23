import React from 'react'
import { Link } from 'react-router-dom'

import Rating from './Rating.js'
const MovieCard = ({id, title, image, rate}) => {
        return (
           
            <div className='movie'>
                <h1>{title}</h1>
                <img src= {image} />
                
                <Rating style={{textAlign:'center', marginTop : '2rem'}} rate = {rate}  />
                <Link to={`/details/${id}`}>
                    <button>learn more</button>
                </Link>
               
            </div>
            
        )
} 
                    
export default MovieCard
