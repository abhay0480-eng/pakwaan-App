import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './public/logo.webp'
import banner from './bannerdata.json'
import restrauntList from './restrauntsData.json'

const BodySection  = () => {
    return(
        <>
        <section className='flex flex-wrap  justify-between gap-10 items-center bg-white  max-w-screen-2xl mx-auto'>
            {
                banner.map((banneritems,index)=>{
                    return(
                    <div key={banneritems?.id} className='w-28 h-32 bg-white'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${banneritems?.imageId}`} 
                        alt={`${banneritems?.accessibility?.altText}`} 
                        className='cursor-pointer'
                        />
                    </div>
                    )
                })
            }
        </section>

        <section className='grid grid-cols-4 gap-5 max-w-screen-2xl mx-auto my-10'>
            {
                restrauntList.map((restData,index)=>{
                    return(
                        <div id={restData?.id}>
                            <div className='h-48'>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restData?.info?.cloudinaryImageId}`} 
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



const HeaderComponent = () => {
    return (
        <div className='p-5  rounded-xl'>
            <div className=' max-w-screen-2xl mx-auto flex justify-between'>
            <div className='w-20 h-20 '>
               <img src={logo} alt='' className='object-cover w-full h-full'/>
            </div>
            <div className='flex justify-between gap-5 items-center cursor-pointer'>
                    <p>Search</p>
                    <p>Offer</p>
                    <p>Help</p>
                    <p>Sign in</p>
            </div>
            </div>
        </div>
)
}

const FoodApp = () => {
    return(
        <div>
            <HeaderComponent/>
            <BodySection/>
        </div>
    )
}
const rootEl = ReactDOM.createRoot(document.getElementById("root"))
rootEl.render(<FoodApp/>)