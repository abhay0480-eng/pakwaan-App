import React, { createContext, useEffect, useState } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import LoginLayout from '../RegisterAndLogin/LoginLayout'
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import toast, { Toaster } from 'react-hot-toast';
export const LocationContext = createContext();

const GlobalLayout = () => {
  
  const [coordinates, setCoordinates] = useState({ lat: 23.076253, lng: 72.5478069 });
  const [currentCoordinates, setCurrentCoordinates] = useState({ lat: 23.076253, lng: 72.5478069 });

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


  useEffect(() => {

    const handleError = (error) => {
      console.error("Geolocation error:", error);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []); // Empty dependency array ensures this only runs once on mount

  console.log("GlobalLayout called",coordinates,currentCoordinates);

  return (
    <div>
       <Provider store={store}>
       <LocationContext.Provider value={{ coordinates, setCoordinates, currentCoordinates }}>
       <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <HeaderComponent/>
        <div className='mt-40'>
        <Outlet/>
        </div>
       </LocationContext.Provider>
       </Provider>
    </div>
  )

}

export default GlobalLayout
