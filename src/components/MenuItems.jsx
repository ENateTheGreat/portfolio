import React, { useRef, useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function MenuItems({ items }) {
// the initial state and ref for the parent dropdown component
    const [dropdown, setDropdown] = useState(false);
    const dropRef = useRef()
// the state for the individual slide out components ( the next level down of the dropdown )
    const [dragonDrop, setDragon] = useState(false);
    const [weatherDrop, setWeather] = useState(false);
    const [planetDrop, setPlanet] = useState(false);
    const [keysDrop, setKeys] = useState(false);
    const [palindromeDrop, setPalindrome] = useState(false);
    const [numsDrop, setNums] = useState(false);
// these are the arrays with everything included so I can use the index from the map of the parent function component to assign the proper state to each one
    const stateMap = [ dragonDrop, weatherDrop, planetDrop, keysDrop, palindromeDrop, numsDrop ];
    const changeMap = [ setDragon(false), setWeather(false), setPlanet(false), setKeys(false), setPalindrome(false), setNums(false) ] // maybe dont need
// the refs for the individual slide out components ( the next level down of the dropdown )
    const dragonRef = useRef();
    const weatherRef = useRef();
    const planetRef = useRef();
    const keysRef = useRef();
    const palindromeRef = useRef();
    const numsRef = useRef();
// these are the arrays with everything included so I can use the index from the map of the parent function component to assign the proper refs to each one
    const refMap = [ dragonRef, weatherRef, planetRef, keysRef, palindromeRef, numsRef ];

// useEffect() for the attempt at preventing too many rerenders
    useEffect(() => {
        setDragon(prev => !prev)
    },[])
    useEffect(() => {
        setWeather(prev => !prev)
    },[])
    useEffect(() => {
        setPlanet(prev => !prev)
    },[])
    useEffect(() => {
        setKeys(prev => !prev)
    },[])
    useEffect(() => {
        setPalindrome(prev => !prev)
    },[])
    useEffect(() => {
        setNums(prev => !prev)
    },[])
// the mouse enter and leave event listeners to make the second stage have hover functionality
    onmouseenter = e => {
        e.target = dragonRef.current 
        ? dragonDrop
        : e.target = weatherRef.current
            ? weatherDrop
            : e.target = planetRef.current
                ? planetDrop
                : e.target = keysRef.current
                    ? keysDrop
                    : e.target = palindromeRef.current
                        ? palindromeDrop
                        : e.target = numsRef.current
                            ? numsDrop
                            : dragonDrop + weatherDrop + planetDrop + keysDrop + palindromeDrop + numsDrop;
    }
    
    onmouseleave = (e) => (
        e.target !== dragonRef.current 
        ? dragonDrop
        : e.target !== weatherRef.current
            ? weatherDrop
            : e.target !== planetRef.current
                ? planetDrop
                : e.target !== keysRef.current
                    ? keysDrop
                    : e.target !== palindromeRef.current
                        ? palindromeDrop
                        : e.target !== numsRef.current
                            ? numsDrop
                            : dragonDrop + weatherDrop + planetDrop + keysDrop + palindromeDrop + numsDrop
    )
// the event listener for the first (parent) dropdown menu
    window.addEventListener('click', (e) => {
        
        if(e.target !== dropRef.current) {
            setDropdown(false)
        }
    })
    
    return (
        <li className={items.linkClass}>
            {/* this is the ternary operator to go through which main nav components have a dropdown menu  */}
            {items.submenu ? (
                <>
                {/* the span is needed to make the  */}
                    <button 
                        type='button' 
                        aria-haspopup='menu' 
                        className={items.className} 
                        aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}
                        ref={items.ref === 'dropRef' ? dropRef : 0}>
                            {/* the span is needed to make the full button clickable, before the text on the button was not clickable, and the p element corrects skew so words are not slanted */}
                        <span className='skew-correct-span'><p className='skew-correct'>{items.title}{' '}</p></span>
                    </button>
                    {/* this is the dropdown component where everything is mapped through (see Dropdown.jsx for the component)  */}
                    <Dropdown submenus={items.submenu} dropdown={dropdown} dropState={stateMap} dropRef={refMap} changeMap={changeMap} onClick={() => setDropdown(false)}/>
                </>

            ) : (
                <Link 
                    to={items.url} 
                    id='nav-button' 
                    className={items.linkClass}>
                        <button 
                            className={items.className}>
                                <span className='skew-correct-span'><p className='skew-correct'>{items.title}</p></span>
                        </button>
                </Link>
            )}
        </li>
    )
}

export default MenuItems
