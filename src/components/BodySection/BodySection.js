

import { useEffect, useState } from 'react'
import { restrauntUrl } from '../../utils/constants'
import BannerComponent from './Banner Component/BannerComponent'
import RestrauntList from './RestrauntsList/RestrauntList'
import ShimmerEffectRestraunts from './RestrauntsList/ShimmerEffectRestraunts'
import ShimmerEffectBanner from './Banner Component/ShimmerEffectBanner'

const BodySection  = () => {
    const [sliderData, setSliderData] = useState([])
    const [topRestrauntsData, setTopRestrauntsData] = useState([])
    const [restrauntsData, setRestrauntsData] = useState([])
    const [topRes, setTopRes] = useState(false)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        getRestrauntsData()
    },[])

    const getRestrauntsData = async() => {
        try {
            setLoading(true)
            const resReq = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0747676&lng=72.535598&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            
            const resRes = await resReq.json()
            console.log("resRes",resRes);
            console.log("resResslider",resRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

    return(
        <>

       {loading? <ShimmerEffectBanner />:<BannerComponent bannerdata={sliderData}/>}

        <section className='max-w-screen-2xl mx-auto my-10'>
            <div className='flex justify-start gap-x-10 items-center'>
                <div>
                    <input 
                        type='search'
                        className='focus:outline-none py-2  px-3'
                        placeholder='Search fav one...'
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                    />
                </div>
                <button onClick={()=>setTopRes(pre=>!pre)} type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{!topRes?"Top Restraunts":"All Restraunts"}</button>
            </div>
        </section>

        {loading?<ShimmerEffectRestraunts />:<RestrauntList restrauntsData={topRes?restrauntsData:topRestrauntsData} searchTerm={search}/>
        }
        </>
    )
}

export default BodySection