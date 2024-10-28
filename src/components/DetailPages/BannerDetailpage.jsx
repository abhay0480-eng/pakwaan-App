import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { restrauntUrl } from '../../utils/constants'
import CardUI from '../Common/CardUI'
import ShimmerEffectBanner from '../BodySection/Banner Component/ShimmerEffectBanner'
import ShimmerEffectRestraunts from '../BodySection/RestrauntsList/ShimmerEffectRestraunts'

const BannerDetailpage = () => {
    const {id} = useParams()
    const [bannerCardData, setBannerCardData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        getbannerDetail()
    },[id])

    const getbannerDetail = async() => {

        try {
            setLoading(true)
            const reqBannerDetailData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0747676&lng=72.535598&collection=${id}&tags=layout_breakfastcampaign&sortBy=&filters=&type=rcv2&offset=0&page_type=null`) 
            const resBannerDetailData = await reqBannerDetailData.json()
            console.log("resBannerDetailData",resBannerDetailData);
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



