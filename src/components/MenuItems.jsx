import React, { useRef, useState } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function MenuItems({ items }) {

    const [dropdown, setDropdown] = useState(false);

    const dropRef = useRef()


    window.addEventListener('click', (e) => {
        
        if(e.target !== dropRef.current) {
            setDropdown(false)
        }
    })
    
    return (
        <li className={items.linkClass}>
            {items.submenu ? (
                <>
                    <button 
                        type='button' 
                        aria-haspopup='menu' 
                        className={items.className} 
                        aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}
                        ref={items.ref === 'dropRef' ? dropRef : 0}>
                        {items.title}{' '}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} onClick={() => setDropdown(false)}/>
                </>

            ) : (
                <Link 
                    to={items.url} 
                    id='nav-button' 
                    className={items.linkClass}>
                        <button 
                            className={items.className}>
                                {items.title}
                        </button>
                </Link>
            )}
        </li>
    )
}

export default MenuItems
