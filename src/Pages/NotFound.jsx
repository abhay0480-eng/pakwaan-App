import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import pizza from '../../public/pizza.svg'



const NotFound = () => {
    const error = useRouteError()

    
  return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-400 to-red-500 p-6">
        <div className="text-center text-white max-w-md">
        <h1 className="text-9xl font-extrabold mb-4">{error.status}</h1>
        <p className="text-3xl font-bold">Uh-oh! Lost in the Sauce?</p>
        <p className="text-lg mt-2 mb-8">It seems like the dish you're looking for has left the kitchen!</p>
        
        <div className="flex justify-center mb-8">
            <img src={pizza} alt="Funny food icon" className="w-36 h-36 " />
        </div>
        
        <Link to="/" className="inline-block">
            <button className="px-8 py-3 bg-white text-orange-500 font-semibold rounded-full hover:bg-orange-100 transition duration-300">
                Back to Menu 🍔
            </button>
        </Link>
        </div>
        </div>
  )
}

export default NotFound
