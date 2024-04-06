import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dropdown.css'


function Dropdown({ submenus, dropdown }) {


    return (
        <ul className='dropdownMenu' id='dropdown' style={{ opacity: `${dropdown ? 1 : 0}`,
                                                            pointerEvents: `${dropdown ? 'all' : 'none'}`,
                                                            transform: `${dropdown ? 'translateY(0px)' : 'translateY(-20px)'}` }}>
            {submenus.map((submenu, index) => (
                <li key={index} className='menu-items'>
                    <Link to={submenu.url}><button id='navP' className={submenu.className}>{submenu.title}</button></Link>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown
