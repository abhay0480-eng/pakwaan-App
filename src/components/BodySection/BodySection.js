

import { useEffect, useState } from 'react'
import { restrauntUrl } from '../../utils/constants'
import BannerComponent from './Banner Component/BannerComponent'
import RestrauntList from './RestrauntsList/RestrauntList'
import ShimmerEffectRestraunts from './RestrauntsList/ShimmerEffectRestraunts'
import ShimmerEffectBanner from './Banner Component/ShimmerEffectBanner'
import useRestaurantList from '../../utils/useRestaurantList'

const BodySection  = ({lat,lng}) => {

 
    const {sliderData,topRestrauntsData,restrauntsData,loading} = useRestaurantList(lat,lng)
    const [topRes, setTopRes] = useState(false)
    const [search, setSearch] = useState("")

    console.log("BodySection called");
    

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
                <button onClick={()=>setTopRes(pre=>!pre)} type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{!topRes?"Top Restraunts":"All Restraunts"}</button>
            </div>
        </section>

        {loading?<ShimmerEffectRestraunts />:<RestrauntList restrauntsData={topRes?restrauntsData:topRestrauntsData} searchTerm={search}/>
        }
        </>
    )
}

export default BodySection