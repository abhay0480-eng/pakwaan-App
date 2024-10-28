import React, { useEffect, useState } from 'react'
import { restrauntUrl } from '../../../utils/constants'
import CardUI from '../../Common/CardUI'

const RestrauntList = ({restrauntsData,searchTerm}) => {

    const [filteredData,setFilteredData] = useState(restrauntsData)

    useEffect(()=>{
       const filterData =  restrauntsData.filter((item,index)=>item?.info?.name?.toLowerCase().includes(searchTerm?.toLowerCase()))
       setFilteredData(filterData)
    },[searchTerm,restrauntsData])


  return (
 
       <CardUI resData={filteredData} url={restrauntUrl}/>
               
  )
}

export default RestrauntList
