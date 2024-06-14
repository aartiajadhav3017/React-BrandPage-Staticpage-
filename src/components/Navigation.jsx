import React from 'react'
import brand_logo from "../../public/images/brand_logo.svg"
import "../App.css"

const Navigation = () => {
    return (
        <div>
            <nav className='container'>
                <div className="logo">
                    <img src={brand_logo}></img>
                </div>

                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button>login</button>
            </nav>
        </div>
    )
}

export default Navigation