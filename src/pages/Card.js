import React from 'react'
import { Link } from 'react-router-dom'

const Card =(props)=>{
    return(
        <Link to={`/products/${props.id}`} >
            <a className='click'>
                <section className='theCards'>
                    <figure className='figure card-image'>
                        <img src={props.picture} alt='authorImg' className='cardImage' />
                    </figure>
                    <div className= 'cardInfo'>
                        <div className='author'>
                            <div className='author'>{props.author}</div>
                        </div>

                        <div className='tourNameDesc'>
                            <div className='tourName'>{props.tourName}</div>
                        </div>

                        <div className='timeFrameDesc'>
                            <div className='timeFrame'> {props.country}</div>
                        </div>
                    </div>
                </section>
            </a>
        </Link>    
    )
}

export default Card