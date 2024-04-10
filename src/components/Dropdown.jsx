import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dropdown.css'


function Dropdown({ submenus, dropdown }) {


    return (
        <ul className='dropdownMenu' id='dropdown' style={{ opacity: `${dropdown ? 1 : 0}`,
                                                            pointerEvents: `${dropdown ? 'all' : 'none'}`,
                                                            transform: `${dropdown ? 'translate(0px, 0px) skewX(-20deg)' 
                                                                                    : 'translate(7px, -20px) skewX(-20deg)'}` }}>
            
            {submenus.map((submenu, index) => (
                <li key={index} className='menu-items'>
                    <Link to={submenu.url}><button id='navP' className={submenu.className}><span className='skew-correct-span'><p className='skew-correct'>{submenu.title}</p></span></button></Link>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown
