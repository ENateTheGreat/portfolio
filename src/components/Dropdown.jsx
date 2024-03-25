import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ submenus, dropdown }) {
    return (
        <ul className={`dropdown${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className='menu-items'>
                    <Link to={submenu.url}><button id='navP' className={submenu.className}>{submenu.title}</button></Link>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown
