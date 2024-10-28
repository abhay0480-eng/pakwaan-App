import React from 'react'

const SliderUi = ({children}) => {
  return (
    <section className='flex overflow-x-auto  scrollbar-hide overflow-y-hidden whitespace-nowrap gap-10 items-center bg-white max-w-screen-2xl mx-auto'>
        {children}
    </section>
  )
}

export default SliderUi
