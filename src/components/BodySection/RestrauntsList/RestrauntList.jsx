import React, { useEffect, useState } from 'react'
import { restrauntUrl } from '../../../utils/constants'

const RestrauntList = ({restrauntsData,searchTerm}) => {

    const [filteredData,setFilteredData] = useState(restrauntsData)

    useEffect(()=>{
       const filterData =  restrauntsData.filter((item,index)=>item?.info?.name?.toLowerCase().includes(searchTerm?.toLowerCase()))
       setFilteredData(filterData)
    },[searchTerm,restrauntsData])


  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 max-w-screen-2xl mx-auto my-10'>
            {
                filteredData.map((restData,index)=>{
                    return(
                        <div id={restData?.id} className='hover:scale-105 duration-200 cursor-pointer'>
                            <div className='h-48'>
                                <img src={`${restrauntUrl}${restData?.info?.cloudinaryImageId}`} 
                                alt='' 
                                className='w-full h-full object-cover rounded-xl' 
                                />
                            </div>
                            <div>
                                <p className='my-2 font-semibold '>{restData?.info?.name}</p>
                                <p><span>{restData?.info?.avgRating}</span> <span>{restData?.info?.sla?.slaString}</span></p>
                                <p>{restData?.info?.cuisines.join(", ")} {restData?.info?.areaName}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
  )
}

export default RestrauntList
