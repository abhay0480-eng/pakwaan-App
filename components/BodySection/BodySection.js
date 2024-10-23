

import banner from '../../bannerdata.json'
import restrauntList from '../../restrauntsData.json'
import { bannerUrl } from '../../utils/constants'
import { restrauntUrl } from '../../utils/constants'

const BodySection  = () => {
    return(
        <>

        <section className='flex overflow-x-auto  scrollbar-hide overflow-y-hidden whitespace-nowrap gap-10 items-center bg-white max-w-screen-2xl mx-auto'>
            {
                banner.map((banneritems, index) => {
                return (
                    <div key={banneritems?.id} className='inline-block w-28 h-32 bg-white hover:scale-125 duration-200 scroll-snap-align-start flex-shrink-0'>
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

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 max-w-screen-2xl mx-auto my-10'>
            {
                restrauntList.map((restData,index)=>{
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
        </>
    )
}

export default BodySection