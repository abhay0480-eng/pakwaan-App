import React from 'react'
import { recommendaedImageUrl } from '../../utils/constants'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import StarsIcon from '@mui/icons-material/Stars';

const Accordian = ({setIsAccordianOpen,isAccordianOpen,menuData,indexMenu}) => {
    
  return (
    <div className='my-10'>
            <div onClick={()=>setIsAccordianOpen(indexMenu)} className='py-5 cursor-pointer flex justify-between items-center shadow-lg px-4 rounded-md'>
              <p className='font-bold text-lg '>{menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[indexMenu]?.card?.card?.title} ({menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[indexMenu]?.card?.card?.itemCards?.length})</p>
              <div>
                {isAccordianOpen===indexMenu?<KeyboardArrowDownIcon className='w-10 h-10' /> : <KeyboardArrowUpIcon className='w-10 h-10'/> }
              </div>
            </div>

            <div className={`${isAccordianOpen===indexMenu?"max-h-[5000px]":"max-h-0"} overflow-hidden ease-in-out transition-all duration-1000`}>
              {menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[indexMenu]?.card?.card?.itemCards?.map((recommended,index)=>{
                return(
                  <div className={`flex justify-between rounded-md items-center gap-5 px-5 py-5 border-b-[1px] relative bg-white  border-gray-200 drop-shadow-lg `}>
                   <div className={`w-full h-full absolute bg-opacity-10 rounded-lg  border-b-[1px]  border-gray-200 z-30 left-0 top-0 bg-black flex flex-col justify-center items-center text-3xl text-black font-bold   ${recommended?.card?.info?.price/100?"hidden":"block"}`}>Not Available</div>
                    <div className={`w-[70%] ${recommended?.card?.info?.price/100?"":"blur-sm"}`} >
                      <p className='font-bold text-lg'>{recommended?.card?.info?.name}</p>
                      <p className='font-bold text-base'>₹ {recommended?.card?.info?.price/100?recommended?.card?.info?.price/100 : "Not Available"}</p>
                      {recommended?.card?.info?.ratings?.aggregatedRating?.rating &&<p className='my-2'> <StarsIcon className='text-green-800'/>  {recommended?.card?.info?.ratings?.aggregatedRating?.rating} ({recommended?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>}
                      <p className='my-2 text-sm font-medium'>{recommended?.card?.info?.description}</p>
                    </div>
                    <div className='relative'>
                      <div className={` ${recommended?.card?.info?.price/100?"":"blur-sm"}`}>
                      <img src={`${recommendaedImageUrl}${recommended?.card?.info?.imageId}`} alt='' className='min-w-36 max-w-36 min-h-36 h-36 rounded-xl object-cover' />
                      </div>
                      <div className='absolute bottom-1 z-10  left-1/2 transform -translate-x-1/2'>
                    
                      <button type="button" className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-lg ${recommended?.card?.info?.price/100?"":"hidden"}`}> Add</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
  )
}

export default Accordian
