import React, {useRef} from 'react'
import '../../styles/HomePage.css'
//import gsap from 'gsap'
//import { useGSAP } from '@gsap/react'
//import {TextPlugin} from 'gsap/TextPlugin' 

//gsap.registerPlugin(TextPlugin)
//const text = document.querySelector(".text-home")

export default function HomePage() {

    const container = useRef()
    
    /* useGSAP(() => {

        gsap.to(text,  {duration: 2, text:'Full-Stack Developer'})
    }, {scope: container}) */

    return (
        <div ref={container}>
            <div className='home-wrapper'>
                <p className='text-home'>Full-Stack Developer</p>
            </div>
        </div>
    )
}





//e6cbd044-1c8b-47f0-8cb2-818042b17b33