import React from 'react'
import { useState, useEffect } from 'react'
import Map from "./components/Map"
import Loader from "./components/Loader"
import Header from './components/Header'
const App = () => {

  const [eventData, setEventData]=useState([]);
  // storing event array of api
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const fetchEvents=async()=>{
      setLoading(true);
      const res=await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const {events}=await res.json();
      //destructing event property from response
      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
    console.log(eventData);
  }, [])

  return (
    <div>
    <Header/>
    { !loading ? <Map eventData={eventData} /> : <Loader/>}
    </div>
  )
}

export default App