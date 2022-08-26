import './index.css';
import Header from './Header';
import { useEffect, useState, useMemo } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeaturedHouse from './FeaturedHouse';
import HouseFilter from './HouseFilter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/HouseFromQuery';
import Signup from '../login/Signup';
import Login from '../login/Login';


function App() {

 let [housesData,setHousesData] = useState([]);

 useEffect( () => {
  const fetchJSON =  async () => {
try{
  let result = await fetch('http://localhost:5000/', {
      method: "get",
      headers: {
          'Content-Type': 'application/json',
              'Accept': 'application/json'
      }
  })
  console.log("After Fetch");
  result = await result.json();
  setHousesData(result);
  console.warn(result);
  if (result) {
      console.log("data retrived successfully");        
  }
} catch(error){
  console.log(error)
}
}
fetchJSON();} ,[]
);

 const featuredhouse = useMemo( () => { 
  if(housesData.length){
    const randomIndex= Math.floor(Math.random()*housesData.length);
    return housesData[randomIndex];
  }}
,[housesData]);



  return (
    <BrowserRouter>
    <div className="container">
      <Header/>
      <HouseFilter allHouses={housesData}/>      
      <Routes>
      <Route path="/" element={<FeaturedHouse house={featuredhouse} />} />
      <Route path="/searchResults/:county" element={<SearchResults allHouses={housesData} />} />
      <Route path="house/:id" element={<HouseFromQuery allHouses={housesData}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>     
    </div>
    </BrowserRouter>
  );
}

export default App;
