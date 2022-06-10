import React from "react"; 
import "./App.css";
import Navbar from './components/Navbar'
import { BrowserRouter , Routes, Route, } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import Hero from './pages/hero'
import Products from './pages/Products'
import SingleProductPage from './pages/singleProductPage'
import Learn from './pages/learn'
import Error from './components/Error'
import Footer from './components/Footer'

function App() {
    const [lostInTimeData, setLostInTimeData] = React.useState([]);
  
    React.useEffect(() => {
      fetch('http://localhost:3001/api/lostInTime')
      .then(res => res.json())
      .then(data => setLostInTimeData(data))
    }, [])
    


  return (
    <BrowserRouter>
      <Header data={lostInTimeData} />
        <Navbar />
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/hero' element= {<Hero/>} />
            <Route path='/Products' element= {<Products props={lostInTimeData}/>} />
            <Route path="/Products/:id" element={<SingleProductPage props={lostInTimeData}/>} />
            <Route path='/Learn' element= {<Learn/>} />
            <Route path="*" element= {<Error />} />
          </Routes>
          <Footer />
    </BrowserRouter>
    );
  }
  
  export default App;
  
