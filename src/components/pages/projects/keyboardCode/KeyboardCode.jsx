import React, {useState, useEffect} from 'react'
//import NavP from '../../NavP' // to be fully removed post completion of dropdown
import './keyboardStyles.css'

// variables to keep closure fresh
let keyName = 'Press any key'
let keyNum = 'to start.'
// functional component
function KeyboardCode() {
// react state hooks
    const [name, setName] = useState(keyName)
    const [code, setCode] = useState(keyNum)
// react hook to make the event listen over the whole page
    useEffect(() => {
        function handleKeyDown(e) {
            keyName = 'You pressed '+ e.key;
            keyNum = 'Key Code: '+e.keyCode;
            setName(keyName);
            setCode(keyNum);
        }
        document.addEventListener('keypress', handleKeyDown);
// clean up the effect
        return function cleanUp() {
            document.removeEventListener('keypress', handleKeyDown);
        }
    }, [])

    //i could add an if statement to where if the code variable is not empty then it can change the display to show instead of none

    return (
        <div className='key-app' >
            {/*<NavP /> // to be fully removed post completion of dropdown */}
            <div className="key-container">
                <div className="key-name">{name}</div>
                <div className="key-code">{code}</div>
            </div>
        </div>
    )
}

export default KeyboardCode

