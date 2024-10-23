import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.js'
import BodySection from './components/BodySection/BodySection.js'
import './index.css'


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