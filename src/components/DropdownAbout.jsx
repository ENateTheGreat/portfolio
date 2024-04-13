import React from 'react'
import { Link } from 'react-router-dom'

function DropdownAbout(submenus, dropState, dropRef, changeMap, index) { // unsure if the dropState and changeMap arrays are needed here since the onmouseenter and onmouseleave are handled by the parent
    return (
        <ul classname='dropdownAbout' id='dropdownAbout' style={{}}>
            <li ref={dropRef[index]} key={submenus.classNameA} className={submenus.classNameA}>
                <Link to={submenus.urlA}>
                    <span className={submenus.classNameA + 'span'}> {/* the span is needed to make the whole button clickable  */}
                        <p className={submenus.classNameA +'p'}>Read Me</p>
                    </span>
                </Link>
            </li>
        </ul>
    )
}

export default DropdownAbout
