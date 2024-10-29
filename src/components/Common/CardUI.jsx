import React from 'react'
import { Link } from 'react-router-dom';
import StarsIcon from '@mui/icons-material/Stars';

const CardUI = ({resData,url}) => {
    
return (
<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 max-w-screen-2xl mx-auto my-10'>
{
    resData?.map((restData,index)=>{
        return(
            <div>
                { <Link to={`/restraunt-menu/${restData?.info?.id }`} id={restData?.info?.id || index} className={`hover:scale-105 duration-200 cursor-pointer `}>
                <div className='h-48'>
                    <img src={`${url}${restData?.info?.cloudinaryImageId || restData?.card?.card?.info?.cloudinaryImageId || "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_703971.JPG"} `} 
                    alt='' 
                    className='w-full h-full object-cover rounded-xl' 
                    />
                </div>
                <div>
                    <p className='my-2 font-semibold '>{restData?.info?.name  || restData?.card?.card?.info?.name || "Name" + index}</p>
                    <p><span> <StarsIcon className='text-green-800'/> {restData?.info?.avgRating || restData?.card?.card?.info?.avgRating || "rating"}</span> <span>{restData?.info?.sla?.slaString ||  restData?.card?.card?.info?.sla?.slaString}</span></p>
                    <p>{restData?.info?.cuisines.join(", ") || restData?.card?.card?.info?.cuisines.join(", ")} {restData?.info?.areaName || restData?.card?.card?.info?.areaName || "Ahmedabad"}</p>
                </div>
            </Link>}
            </div>
        )
    })
}
</section>
  )
}

export default CardUI
