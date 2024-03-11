import React from 'react'

function DragonControls({ buttonFunction, buttonText}) {
    return (
        <div className='controls-component'>
            <button id="button1" className='gButton' onClick={buttonFunction.button1}>{buttonText.button1}</button>
            <button id="button2" className='gButton' onClick={buttonFunction.button2}>{buttonText.button2}</button>
            <button id="button3" className='gButton' onClick={buttonFunction.button3}>{buttonText.button3}</button>
        </div>
    )
}

export default DragonControls
