import React from 'react'
import { recommendaedImageUrl } from '../../utils/constants'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Accordian = ({setIsAccordianOpen,isAccordianOpen,menuData,indexMenu}) => {
    console.log("menuData",menuData);
    
  return (
    <div className='my-10'>
            <div onClick={()=>setIsAccordianOpen(indexMenu)} className='py-5 cursor-pointer flex justify-between items-center shadow-lg px-4 rounded-md'>
              <p className='font-bold text-lg '>{menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[indexMenu]?.card?.card?.title} ({menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[indexMenu]?.card?.card?.itemCards?.length})</p>
              <div>
                {isAccordianOpen===indexMenu?<KeyboardArrowDownIcon className='w-10 h-10' /> : <KeyboardArrowUpIcon className='w-10 h-10'/> }
              </div>

            </div>
            <div className={`${isAccordianOpen===indexMenu?"max-h-[3000px]":"max-h-0"} overflow-hidden ease-in-out transition-all duration-1000`}>
              {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[indexMenu]?.card?.card?.itemCards?.map((recommended,index)=>{
                return(
                  <div className='flex justify-between items-center gap-5 px-5 py-5 border-b-[1px] border-gray-200'>
                  <div className='w-[70%]'>
                    <p className='font-bold text-lg'>{recommended?.card?.info?.name}</p>
                    <p className='font-bold text-base'>₹ {recommended?.card?.info?.price/100}</p>
                    {recommended?.card?.info?.ratings?.aggregatedRating?.rating &&<p className='my-2'>{recommended?.card?.info?.ratings?.aggregatedRating?.rating} ({recommended?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>}
                    <p className='my-2'>{recommended?.card?.info?.description}</p>
                  </div>
                  <div className=''>
                    <img src={`${recommendaedImageUrl}${recommended?.card?.info?.imageId}`} alt='' className='min-w-36 max-w-36 min-h-36 h-36 rounded-xl object-cover' />
                  </div>
                  </div>
                )
              })}
            </div>
        </div>
  )
}

export default Accordian
