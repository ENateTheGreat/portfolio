import {React, useRef} from 'react'
import '../../styles/Intro.css'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

export default function Intro() {
    const container = useRef();
    
    useGSAP(() => {
        
            gsap.to('.text', {y:'0%', duration: 1});
            gsap.to('.slider', {y: '-100%', duration: 1.5, delay: 1.5});
            gsap.to('.intro', {y: '-100%', duration: .75}, '-=1');
        
        console.log(container)
    }, {scope: container})

    

    return (
        
        <div ref={container}>
        <div className='intro'>
            <div className="intro-text">
                <h1 className="hide">
                    <span className="text">Welcome!</span>
                </h1>
            </div>
        </div>
        <div className="slider"></div>
        </div>
        
    )
}

