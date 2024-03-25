import React, {useState, useRef} from 'react'
//import NavP from '../../NavP'; // to be fully removed post completion of the dropdown
import './palindromeStyles.css'
// variable to keep fresh closure
let palindrome; 
// functional component
function PalindromeChecker() {
// react hooks
    const inputRef = useRef();
    const [isPal, setIsPal] = useState()
// function that removes space in input value
    const spaceRemover = () => {
        let input = inputRef.current.value;
        return input.replace(/[^\w]/g, '').replace(/\s/g, '').replace(/_/g, '').toLowerCase();
    }
// function that uses spaceRemover() to check if the input is a palindrome
    const palindromeCheck = () => {
        let clean = spaceRemover();
        let reverse = [];
        for (let i = 0; i < clean.length; i++) {
            reverse.unshift(clean[i]);
        }
        let joined = reverse.join('');
        if (clean === '') {
            alert('Please input a value.')
        } else if (clean === joined) {
            palindrome = inputRef.current.value +' is a palindrome.';
            setIsPal(palindrome);
        } else {
            palindrome = inputRef.current.value +' is not a palindrome.';
            setIsPal(palindrome);
        }
    }
// add functionality to input field for pressing enter
    function keyDown(event) {
        var keyCode = event.keyCode || event.charCode;
        if (keyCode === 13) {
            palindromeCheck()
        }
    }

    return (
        <div className='palindrome-app'>
            {/*<NavP /> // to be fully removed post completion of dropdown */}
            <div className="palindrome-wrapper">
                <div className="palindrome-nav">
                    <input type="text" className="palindrome-input" placeholder='Enter text here.' ref={inputRef} onKeyDown={keyDown}/>
                    <button className="palindrome-submit" onClick={palindromeCheck}>Check</button>
                </div>
                <div className="response-wrapper">
                    <div className='pal-response'>{isPal}</div>
                </div>
            </div>
        </div>
    )
}

export default PalindromeChecker
