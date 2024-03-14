import './../../styles/NavP.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavP() {
    return (
        <div className='NavP-wrapper'>
            <nav className="projs">
                <Link to="/portfolio/numbergenerator"><button id='navP' className='numGen'>Number<br/>Genereator</button></Link>
                <Link to="/portfolio/DragonRepeller"><button id='navP' className='textGame'>Text<br/>Game</button></Link>
                <Link to="/portfolio/weatherApp"><button id='navP' className='weatherApp'>Weather<br/>App</button></Link>
                <Link to="/portfolio/palindromeChecker"><button id='navP' className='palindromeChecker'>Palindrome<br/>Checker</button></Link>
                <Link to="/portfolio/keyboardCode"><button id='navP' className='keyboardCode'>Keyboard<br/>Code</button></Link>
                <Link to="/portfolio/planetWeight"><button id='navP' className='planetWeight'>Planet<br/>Weight</button></Link>
            </nav>
        </div>
    )
}


