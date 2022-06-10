import React from 'react'
import { useParams } from 'react-router-dom'
// import SingleProductCard from './SingleProductCard'


function SingleProducts () {
    const {id} = useParams();
    const [tour, setTour] = React.useState({
        author: '',
        tourName: '',
        years: '',
        country: '',
        famousWorks: '',
        picture: '',
        gender: '',
        timeFrame: ''
    });
    
    React.useEffect(() => {
        fetch(`http://localhost:3001/api/lostintime/${id}`)
        .then(res => res.json())
        .then(lostInTimeData => {
            setTour(lostInTimeData);
        })
        .catch(
            err => console.log("error in fetch", err)
        );
    }, [id]);

    return(
        <div className='singleProducts'>
            <section className='soloCard'>
                <figure className='figure card-image'>
                    <img src={tour.picture} alt='authorImg' className='cardImage' />
                </figure>
                <div className= 'cardInfo'>
                    <div className='author'>
                        <div className='author'>Author: {tour.author}</div>
                    </div>

                    <div className='tourNameDesc'>
                        <div className='tourName'>Tour Name: {tour.tourName}</div>
                    </div>

                    <div className='timeFrameDesc'>
                        <div className='timeFrame'>Tour Length:{tour.timeFrame}</div>
                    </div>

                    <div className='famousWorksDesc'>
                        <div className='famousWork'> {tour.famousWorks}</div>
                    </div>
                    <button className='addToCart'>Add to Cart</button>
                </div>
            </section>
        </div>
    )
    }

export default SingleProducts