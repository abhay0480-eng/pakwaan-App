import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../components/Layout/GlobalLayout";

const useGetLocationData = () => {
    const [locationdata, setLocationdata] = useState("")
    const coordinates = useContext(LocationContext);

    useEffect(()=>{
        getLocationData()
    },[coordinates?.coordinates])

    
console.log("useGetLocationData called");


    const getLocationData = async() => {

        try {
            const reqLocationData = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coordinates?.coordinates?.lat}&lon=${coordinates?.coordinates?.lng}&format=json`)

            const resLocationData = await reqLocationData.json()
            setLocationdata(resLocationData)
        } catch (error) {
            console.log("error",error);
            
        }finally{

        }
       
        
    }


    return {locationdata}
}

export default useGetLocationData