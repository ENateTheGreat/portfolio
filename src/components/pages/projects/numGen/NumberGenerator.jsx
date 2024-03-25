import React, {useState, useRef} from 'react'
//import NavP from '../../NavP'; // to be fully removed post completion of the dropdown
import './numberStyle.css'
// variable to keep closure fresh
let NUMBERS = []
// functional component
function NumberGenerator() {
// react hooks
    const [numbers, setNumbers] = useState(NUMBERS)
    const inputRef = useRef();
// function for running the number generator
    const submitHandler = (e) => {
        e.preventDefault()
        NUMBERS = []
        for (let i = 0; i <= inputRef.current.value; i++) {
            NUMBERS.push(i)
        }
        setNumbers(NUMBERS)
    };
// functions for sorting if the number is even, odd, or prime
    const isPrime = (num) => {
        if (num <= 2) { return false }
        for (let i = 2; i < num; i++) {
            if(num % i === 0 ) {
                return false
            }
        }
        return true
    };
    const isEven = (num) => {
        if (num % 2 === 0) {
            return true
        }
    };
    const isOdd = (num) => {
        if (num % 2 !== 0) {
            return true
        }
    };
    const sortNumbers = (num) => {
        if (isPrime(num) === true){
            return <div
                    key={num}
                    style={{backgroundColor: '#fd5e5e'}}
                    className='number-box'
                    id='prime'
                    >{num}</div>
        } else if (isOdd(num) === true) {
            return <div
                    key={num}
                    style={{backgroundColor: '#fddb3a'}}
                    className='number-box'
                    id='odd'
                    >{num}</div>
        } else if (isEven(num) === true) {
            return <div
                    key={num}
                    style={{backgroundColor: '#21bf73'}}
                    className='number-box'
                    id='even'
                    >{num}</div>
        }
        
    }
    return (
        <div className='numGen-wrapper'>
            {/*<NavP /> // to be fully removed post completion of dropdown */}
            <div id='num-gen'>
            <div className="num-header-wrapper">
                <h1 className="num-title">Number Generator</h1>
            </div>
            <div className="num-input-forms">
                <form onSubmit={submitHandler}>
                    <input type="number" className="num-enter" placeholder='Enter a number' ref={inputRef}/>
                    <button type="submit" className="num-submit">Generate Numbers</button>
                </form>
            </div>
            <div className="generated-nums">
                {numbers.map(nums => sortNumbers(nums))}
            </div>
            </div>
        </div>
    )
}

export default NumberGenerator
