import { useContext, useEffect, useState } from "react"
import { LocationContext } from "../components/Layout/GlobalLayout"

const useRestaurantList = () => {
    const [sliderData, setSliderData] = useState([])
    const [topRestrauntsData, setTopRestrauntsData] = useState([])
    const [restrauntsData, setRestrauntsData] = useState([])
    const [loading, setLoading] = useState(false)
    const coordinates = useContext(LocationContext);
    
console.log("useRestaurantList called");
const url = `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.coordinates?.lat}&lng=${coordinates?.coordinates?.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

    useEffect(()=>{
        getRestrauntsData()
    },[coordinates?.coordinates])

    const getRestrauntsData = async() => {
        try {
            setLoading(true)
            // const resReq = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.coordinates?.lat}&lng=${coordinates?.coordinates?.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            const resReq = await fetch(url)
            
            const resRes = await resReq.json()
            setSliderData(resRes?.data?.cards[0].card?.card?.imageGridCards?.info?resRes?.data?.cards[0].card?.card?.imageGridCards?.info:[])
            setTopRestrauntsData(resRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?resRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants:[])
            setRestrauntsData(resRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?resRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants:[])
        } catch (error) {
            setLoading(false)
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }

    return{sliderData,topRestrauntsData,restrauntsData,loading}
}

export default useRestaurantList