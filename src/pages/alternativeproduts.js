// import React from 'react'
// import { useParams } from 'react-router-dom'
// import Card from './Card'

// const Products = () => {
//     const [lostInTimeData, setLostInTimeData] = React.useState([])
//     const params = useParams()
    
//     React.useEffect(() => {
//         fetch(`http://localhost:3001/api/lostInTime/`)
//         .then(res => res.json())
//         .then(res => setLostInTimeData(res))
//     }, [])

//             const cards = lostInTimeData.map(card => {
//                 return <Card 
//                     key = {card.id}
//                     // id={card.id}
//                     // picture={card.picture}
//                     // author={card.author}
//                     // tourName={card.tourName}
//                     // years={card.years}
//                     // country={card.country}
//                     // gender={card.gender}
//                     // famousWorks={card.famousWorks}
//                     // timeFrame={card.timeFrame}
//                     {...card}
//                 />
//             })
                
//         console.log({cards})
//         return(
//             <main className='main'>
//                 <div className='cardMainHeader'>
//                     embark on a tour with us
//                 </div>
//                 <div className='cardContainer'>
//                     <div className='tourCards'>
//                         {cards}
//                     </div>
//                 </div>
//             </main>
//         )
//     }


// export default Products