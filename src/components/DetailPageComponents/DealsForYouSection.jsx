import React from 'react'
import { offerImageUrl } from '../../utils/constants'
import SliderUi from '../Common/SliderUi'

const DealsForYouSection = ({menuData}) => {
  return (
    <SliderUi>
    {menuData[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map((offer,index)=>{

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

    })}
  </SliderUi>
  )
}

export default DealsForYouSection
