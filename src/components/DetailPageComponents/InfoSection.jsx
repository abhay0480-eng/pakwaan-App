import React from 'react'

const InfoSection = ({menuData}) => {
  return (
    <div>
        <h1 className='font-bold text-2xl'>{menuData[0]?.card?.card?.text}</h1>
        <div className='w-full rounded-2xl border-[1px] border-black shadow-xl my-5 p-5'>
          <p className='font-bold text-lg'>{menuData[2]?.card?.card?.info?.avgRating} ({menuData[2]?.card?.card?.info?.totalRatingsString}) . {menuData[2]?.card?.card?.info?.costForTwoMessage}</p>
          <p className='text-sm my-2 text-red-500 font-semibold underline'>{menuData[2]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>Outlet {menuData[2]?.card?.card?.info?.areaName}</p>
          <p>{menuData[2]?.card?.card?.info?.sla?.slaString}</p>
        </div>
      </div>
  )
}

export default InfoSection
