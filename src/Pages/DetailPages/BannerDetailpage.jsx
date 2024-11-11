import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { restrauntUrl } from '../../utils/constants'
import CardUI from '../../components/Common/CardUI'
import ShimmerEffectBanner from '../../components/BodySection/Banner Component/ShimmerEffectBanner'
import ShimmerEffectRestraunts from '../../components/BodySection/RestrauntsList/ShimmerEffectRestraunts'
import { LocationContext } from '../../components/Layout/GlobalLayout'

const BannerDetailpage = () => {
    const {id} = useParams()
    const [bannerCardData, setBannerCardData] = useState([])
    const [loading, setLoading] = useState(false)
    const { coordinates } = useContext(LocationContext);

    console.log("BannerDetailpage called", coordinates);
    
    // const url1 = `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.lat}&lng=${coordinates?.lng}&collection=${id}&tags=layout_breakfastcampaign&sortBy=&filters=&type=rcv2&offset=0&page_type=null`, 
    const url = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.lat}&lng=${coordinates?.lng}&collection=${id}&tags=layout_breakfastcampaign&sortBy=&filters=&type=rcv2&offset=0&page_type=null`

    useEffect(()=>{
        getbannerDetail()
    },[id])

    const getbannerDetail = async() => {

        try {
            setLoading(true)
            // const reqBannerDetailData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates?.lat}&lng=${coordinates?.lng}&collection=${id}&tags=layout_breakfastcampaign&sortBy=&filters=&type=rcv2&offset=0&page_type=null`) 
            const reqBannerDetailData = await fetch(url) 
            const resBannerDetailData = await reqBannerDetailData.json()
            setBannerCardData(resBannerDetailData?.data?.cards?resBannerDetailData?.data?.cards:[])
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }finally{
            setLoading(false)
        } 
    }

        return (
            <div>
                {loading ? <ShimmerEffectRestraunts />:<CardUI resData={bannerCardData} url={restrauntUrl}/>}
            </div>
          )
 
  
}

export default BannerDetailpage



