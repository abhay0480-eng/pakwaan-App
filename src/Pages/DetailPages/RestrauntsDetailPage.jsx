import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SliderUi from '../../components/Common/SliderUi'
import {offerImageUrl,topPicksImageUrl} from '../../utils/constants'
import Accordian from '../../components/Common/Accordian'
import InfoSection from '../../components/DetailPageComponents/InfoSection'
import ShimmerInfoSection from '../../components/DetailPageComponents/ShimmerInfoSection'
import DealsForYouSection from '../../components/DetailPageComponents/DealsForYouSection'
import ShimmerEffectBanner from '../../components/BodySection/Banner Component/ShimmerEffectBanner'
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const RestrauntsDetailPage = () => {

    const {id} = useParams()
    const [menuData,setMenuData] = useState([])
    const [isAccordianOpen,setIsAccordianOpen] = useState(2)
    const [loading,setLoading] = useState(false)

    const getRestrauntMenu = async() => {
      try {
        setLoading(true)
        const reqRestrauntMenu = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0747676&lng=72.535598&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const resRestrauntMenu = await reqRestrauntMenu.json()
        setMenuData(resRestrauntMenu?.data?.cards)
      } catch (error) {

        console.log(error);
        setLoading(false)
        
      }finally{
        setLoading(false)
      }
       

    }

    useEffect(()=>{
        getRestrauntMenu()
    },[id])


  return (
    <div className='max-w-screen-lg mx-auto my-10'>
      {loading?<ShimmerInfoSection/>:<InfoSection menuData={menuData}/>}
      
      <div>
        <p className='font-bold text-xl mt-10 mb-5' >Deals for You</p>
        {loading?<ShimmerEffectBanner/>:<DealsForYouSection menuData={menuData}/>}
        

        <div className='my-10'>
          <p className='text-center'><LunchDiningIcon/> Menu <LunchDiningIcon/> </p>
        </div>

        <div>
          <p className='font-bold text-xl mt-10 mb-5' >Top Picks</p>
          <SliderUi>
            {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel?.map((topPick,index)=>{
              return(
                <div className='relative'>
                  <img src={`${topPicksImageUrl}${topPick?.creativeId}`} alt='' className='min-w-64 max-w-64' />
                  <p className='absolute bottom-2 left-5 z-10 text-white'>₹ {topPick?.dish?.info?.price?topPick?.dish?.info?.price/100:""}</p>
                </div>
              )
            })}
          </SliderUi>
        </div>

      

        {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.length>0 &&<Accordian setIsAccordianOpen={setIsAccordianOpen} isAccordianOpen={isAccordianOpen} menuData={menuData} indexMenu={2}/>}

        {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.length>0 &&<Accordian setIsAccordianOpen={setIsAccordianOpen} isAccordianOpen={isAccordianOpen} menuData={menuData} indexMenu={3}/>}

        {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.length>0 &&<Accordian setIsAccordianOpen={setIsAccordianOpen} isAccordianOpen={isAccordianOpen} menuData={menuData} indexMenu={4}/>}

        {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards?.length>0 &&<Accordian setIsAccordianOpen={setIsAccordianOpen} isAccordianOpen={isAccordianOpen} menuData={menuData} indexMenu={5}/>}
      </div>
    </div>
  )
}

export default RestrauntsDetailPage



