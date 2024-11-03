import React from 'react'

const ShimmerEffectBanner = () => {
  return (


    <section className='flex overflow-x-auto  scrollbar-hide overflow-y-hidden whitespace-nowrap gap-10 items-center bg-white max-w-screen-2xl mx-auto'>
    {
        [1,2,3,4,5,6,7,8,9,10]?.map((banneritems, index) => {
        return (
            <div key={index} role="status" className="max-w-sm p-4 rounded shadow animate-pulse md:p-6 ">
            <div className=" bg-gray-200 w-20 h-20 rounded-full dark:bg-gray-700 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
        </div>
        )
        })
    }
    </section>




    
  )
}

export default ShimmerEffectBanner
