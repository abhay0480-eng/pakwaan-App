import React, { createContext, useEffect, useState } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import LoginLayout from '../RegisterAndLogin/LoginLayout'
export const LocationContext = createContext();

const GlobalLayout = () => {
  
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [currentCoordinates, setCurrentCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const handleSuccess = (position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setCurrentCoordinates({ 
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    };

   

    const handleError = (error) => {
      console.error("Geolocation error:", error);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []); // Empty dependency array ensures this only runs once on mount

  console.log("GlobalLayout called");


if(coordinates?.lat === 0 || coordinates?.lng === 0){
  
  return
}else{

  return (
    <div>
       <LocationContext.Provider value={{ coordinates, setCoordinates,currentCoordinates }}>
        <HeaderComponent/>
        <Outlet/>
       </LocationContext.Provider>
    </div>
  )
}
}

export default GlobalLayout
