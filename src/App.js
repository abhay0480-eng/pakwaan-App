import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.js'
import BodySection from './components/BodySection/BodySection.js'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Search from './Pages/Search.js'
import Help from './Pages/Help.js'
import Offer from './Pages/Offer.js'
import Cart from './Pages/Cart.js'
import GlobalLayout from './components/Layout/GlobalLayout.jsx'
import NotFound from './Pages/NotFound.jsx'
import BannerDetailpage from './Pages/DetailPages/BannerDetailpage.jsx'
import RestrauntsDetailPage from './Pages/DetailPages/RestrauntsDetailPage.jsx'
const About = lazy(()=> import('./Pages/About.js'))

const FoodApp = () => {
    return(
        <div>
            <BodySection />
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<GlobalLayout/>} errorElement={<NotFound/>}>
            <Route path='/' element={<FoodApp/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/offers' element={<Offer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>} />
            <Route path='/banner/:id' element={<BannerDetailpage/>} />
            <Route path='/restraunt-menu/:id' element={<RestrauntsDetailPage/>} />
        </Route>
    )
)


const rootEl = ReactDOM.createRoot(document.getElementById("root"))
rootEl.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)