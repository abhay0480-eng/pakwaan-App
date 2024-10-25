import React from 'react'
import { bannerUrl } from '../../../utils/constants'

const BannerComponent = ({bannerdata}) => {
  return (
    <section className='flex overflow-x-auto  scrollbar-hide overflow-y-hidden whitespace-nowrap gap-10 items-center bg-white max-w-screen-2xl mx-auto'>
    {
        bannerdata?.map((banneritems, index) => {
        return (
            <div key={banneritems?.id} className='inline-block w-28 h-32 bg-white hover:scale-125 duration-200  scroll-snap-align-start flex-shrink-0'>
            <img 
                src={`${bannerUrl}${banneritems?.imageId}`} 
                alt={`${banneritems?.accessibility?.altText}`} 
                className='cursor-pointer w-full h-full object-cover' 
            />
            </div>
        )
        })
    }
</section>
  )
}

export default BannerComponent
