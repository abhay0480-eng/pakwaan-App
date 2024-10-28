import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SliderUi from '../Common/SliderUi'
import {offerImageUrl,topPicksImageUrl} from '../../utils/constants'
import Accordian from '../Common/Accordian'

const RestrauntsDetailPage = () => {

    const {id} = useParams()
    const [menuData,setMenuData] = useState([])
    const [isAccordianOpen,setIsAccordianOpen] = useState(true)

    const getRestrauntMenu = async() => {
      try {
        const reqRestrauntMenu = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0747676&lng=72.535598&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const resRestrauntMenu = await reqRestrauntMenu.json()
        console.log("resRestrauntMenu",resRestrauntMenu?.data?.cards);
        setMenuData(resRestrauntMenu?.data?.cards)
      } catch (error) {
        console.log(error);
        
      }finally{

      }
       

    }

    useEffect(()=>{
        getRestrauntMenu()
    },[id])

    
    console.log("menuData",menuData);


  return (
    <div className='max-w-screen-lg mx-auto my-10'>
      <h1 className='font-bold text-2xl'>{menuData[0]?.card?.card?.text}</h1>
      <div className='w-full rounded-2xl border-[1px] border-black shadow-xl my-5 p-5'>
        <p className='font-bold text-lg'>{menuData[2]?.card?.card?.info?.avgRating} ({menuData[2]?.card?.card?.info?.totalRatingsString}) . {menuData[2]?.card?.card?.info?.costForTwoMessage}</p>
        <p className='text-sm my-2 text-red-500 font-semibold underline'>{menuData[2]?.card?.card?.info?.cuisines.join(", ")}</p>
        <p>Outlet {menuData[2]?.card?.card?.info?.areaName}</p>
        <p>{menuData[2]?.card?.card?.info?.sla?.slaString}</p>
      </div>
      <div>
        <p className='font-bold text-xl mt-10 mb-5' >Deals for You</p>
        <SliderUi>
          {menuData[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map((offer,index)=>{
            {console.log("offer",offer);
            return(
              <div className='flex justify-between items-center gap-3'>
                <div>
                  <img src={`${offerImageUrl}${offer?.info?.offerLogo}`} alt='' className='min-w-10 max-w-10' />
                </div>
                <div>
                <p className='font-bold text-lg '>{offer?.info?.header}</p>
                <p>{offer?.info?.description}</p>
                </div>
              </div>
            )
            }
          })}
        </SliderUi>

        <div className='my-10'>
          <p className='text-center'>Menu</p>
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

        <Accordian setIsAccordianOpen={setIsAccordianOpen} isAccordianOpen={isAccordianOpen} menuData={menuData}/>
      </div>
    </div>
  )
}

export default RestrauntsDetailPage



