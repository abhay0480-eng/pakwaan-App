import React from 'react'
import { bannerUrl } from '../../../utils/constants'
import { Link } from 'react-router-dom'
import SliderUi from '../../Common/SliderUi'

const BannerComponent = ({bannerdata}) => {
  console.log("BannerComponent called");
  
  return (
  
    <SliderUi>
    {
            bannerdata?.map((banneritems, index) => {
            return (
                <Link to={`/banner/${banneritems?.action?.link?.match(/collection_id=(\d+)/)?.[1]}`} key={banneritems?.id} className='inline-block w-28 h-32 bg-white hover:scale-125 duration-200  scroll-snap-align-start flex-shrink-0'>
                  <img 
                      src={`${bannerUrl}${banneritems?.imageId}`} 
                      alt={`${banneritems?.accessibility?.altText}`} 
                      className='cursor-pointer w-full h-full object-cover' 
                  />
                </Link>
            )
            })
        }
    </SliderUi>
  )
}

export default BannerComponent
