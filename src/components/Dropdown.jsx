import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dropdown.css'
import DropdownAbout from './DropdownAbout'


function Dropdown({ submenus, dropdown, dropState, dropRef, changeMap }) { // these are the props that create the interactive initial dropdown and also contains vars that get passed to the next level
                                                                            //maybe what i need is to move all the code that has to do with the DropdownAbout component into here instead of having
                                                                            //it in the grandparent component

    

    return (
        <ul className='dropdownMenu' id='dropdown' style={{ opacity: `${dropdown ? 1 : 0}`,
                                                            pointerEvents: `${dropdown ? 'all' : 'none'}`,
                                                            transform: `${dropdown ? 'translate(0px, 0px) skewX(-20deg)' 
                                                                                    : 'translate(7px, -20px) skewX(-20deg)'}` }}>
                                                        {/* ^^^ the operators that make the dropdown menu appear and disappear  */}
            {/* vvv mapping thorugh each item in the menuItems.js with submenus so that all projects have a button  */}
            {submenus.map((submenu, index) => (
                <li key={index} className='menu-items'>
                    <Link to={submenu.url}><button ref={dropRef[index]} id='navP' className={submenu.className}>
                                            <span className='skew-correct-span'>
                                            <p className='skew-correct'>
                                                {submenu.title}
                                            </p></span></button></Link>
                                            {/* The dropdown about component is supposed to be the next level, on hover each button that was mapped through should have an */}
                                            {/* invisible button that on hover will slide out and utilize similar style functions to that of the <ul> above */}
                                                                                                                                        {/* i dont think this on mouse enter and leave is necessary  */}
                    <DropdownAbout submenus={submenus} dropState={dropState} dropRef={dropRef} changeMap={changeMap} index={index}  onMouseEnter={() => dropState[index] = true} onMouseLeave={() => changeMap[index] = !dropState.value}/>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown

// ~~personal notes for app~~ build the dropdown about component and set the styling using the dropstate / change map values based on enter and leave -- also check if these are the right ways to do that.