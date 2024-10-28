import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestrauntsDetailPage = () => {

    const {id} = useParams()

    const getRestrauntMenu = async() => {
        const reqRestrauntMenu = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0747676&lng=72.535598&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const resRestrauntMenu = await reqRestrauntMenu.json()
        console.log("resRestrauntMenu",resRestrauntMenu);
    }

    useEffect(()=>{
        getRestrauntMenu()
    },[id])

    


  return (
    <div>
      
    </div>
  )
}

export default RestrauntsDetailPage
