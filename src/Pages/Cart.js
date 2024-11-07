import React, { useEffect, useMemo, useRef, useState, useTransition } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StarsIcon from '@mui/icons-material/Stars';
import { recommendaedImageUrl } from '../utils/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import { clearCart, removeItems } from '../store/storeSlice';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {
  const dispatch = useDispatch()
  const storeItemsLocal = useSelector((state) => state.store.storeItems);
  // const [storeItemsLocal, setStoreItemsLocal] = useState(JSON.parse(localStorage.getItem("cartItems") || storeItems));

  const handleDelete = (id) => {
      dispatch(removeItems(id))
  }

  
  
  return (

    <>
    {storeItemsLocal?.length>0?
    <div>
      <div className='max-w-4xl mx-auto my-4 flex justify-end items-center '>
        <button onClick={()=>dispatch(clearCart())} className='bg-slate-500 text-white px-4 text-xs hover:scale-105 duration-200 py-2 rounded-2xl'>Clear Cart</button>
      </div>
      <div className='max-h-96 overflow-y-scroll'>
        {storeItemsLocal?.map((recommended,index) => {
          return(
            <div  className={`flex max-w-4xl mx-auto justify-between rounded-md items-center gap-5 px-5 py-5 border-b-[1px] relative bg-white  border-gray-200 `}>
              <div className={`w-full flex justify-between items-center  ${(recommended?.card?.info?.price/100 || recommended?.card?.info?.defaultPrice/100)?"":"blur-sm"} `} >
                <div className='flex justify-start items-center gap-x-5'>
                  <div className=''>
                    <img src={`${recommendaedImageUrl}${recommended?.card?.info?.imageId}`} alt='' className='min-w-16 max-w-16 min-h-16 h-16 rounded-xl object-cover hover:scale-125 cursor-pointer duration-200' />
                  </div>
                  <p className='font-semibold text-base'>{recommended?.card?.info?.name} <span className='text-sm font-medium text-gray-500'>x 1</span> </p>
                </div >
                <div className='flex justify-start items-center gap-x-3'>
                  <p className='font-bold text-base'>₹ {(recommended?.card?.info?.price/100 || recommended?.card?.info?.defaultPrice/100)?(recommended?.card?.info?.price/100 || recommended?.card?.info?.defaultPrice/100) : "Not Available"}</p>
                  <div onClick={()=>{ handleDelete(recommended?.card?.info?.id) ; toast((t) => (
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <img src={`${recommendaedImageUrl}${recommended?.card?.info?.imageId}`} alt='' className='min-w-16 max-w-16 min-h-16 h-16 rounded-xl object-cover hover:scale-105' />
                      </div>
                      <div className="text-sm ">
                        <span className='font-semibold'>{recommended?.card?.info?.name}</span> removed from your cart! 🍽️ It’ll miss you! 😢
                      </div>
                    </div>
                    {/* <button onClick={() => toast.dismiss(t.id)}>
                      Dismiss
                    </button> */}
                  </div>
                ))}}>
                <DeleteIcon className='text-red-600 cursor-pointer'/></div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className='max-w-4xl mx-auto flex justify-between items-center my-4 px-5 shadow-xl py-5 rounded-xl'>
                      <p className=' text-xl font-semibold'>SubTotal</p>
                      <p className=' text-xl font-semibold'>₹ {storeItemsLocal?.reduce((acc, curr) => acc + (curr?.card?.info?.price || curr?.card?.info?.defaultPrice || 0) / 100, 0)}</p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <button className='px-5 py-2 bg-slate-400 text-white rounded-xl hover:scale-105 duration-300'>Proceed To Payment</button>
                    </div>
                  </div>

    
    :

    <div className="flex items-center justify-center ">
    <div className="rounded-xl shadow-2xl bg-yellow-50 p-10 max-w-md text-center space-y-6 transform transition-transform duration-300 hover:scale-105">
      
      <h1 className="text-5xl font-extrabold mb-4">🍕 Hungry for Something?</h1>
      
      <p className="text-lg font-medium text-yellow-700">
        Your cart is as empty as a chef’s fridge after dinner service! 🍽️
      </p>
      
      <div className="text-7xl flex justify-center space-x-3 animate-pulse mb-6">
        <span role="img" aria-label="burger">🍔</span>
        <span role="img" aria-label="pizza">🍕</span>
        <span role="img" aria-label="sushi">🍣</span>
        <span role="img" aria-label="fries">🍟</span>
      </div>
      
      <div className='text-gray-500 mb-10 '>
        <p className="">Seems like you haven’t added any delicious treats yet!</p>
      </div>
      <div className='text-gray-500 my-10 '>
      <Link to="/" 
        className="bg-gradient-to-r my-5 from-red-500 to-yellow-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
      >
        🍽️ Order Something Tasty!
      </Link>
      </div>
      
      <p className="text-sm text-yellow-600 mt-4 italic">Your cravings are just a click away!</p>
    </div>
  </div>
    }
    
    </>
    
  )
}

export default Cart


{/* <img src={`${recommendaedImageUrl}${recommended?.card?.info?.imageId}`} alt='' className='min-w-36 max-w-36 min-h-36 h-36 rounded-xl object-cover' /> */}