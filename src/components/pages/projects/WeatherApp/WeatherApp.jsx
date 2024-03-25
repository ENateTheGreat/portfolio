import React, {useState, useRef} from 'react'
//import NavP from '../../NavP' // to be removed post completion of the dropdown
import axios from 'axios'
import './weatherStyles.css'
// .env import
const apiKey = process.env.REACT_APP_API_KEY;
// variables to keep fresh closure
let nameValue;
let descValue;
let tempValue;
let iconValue;
//functional component
function WeatherApp() {
// react hooks
    const inputRef = useRef();
    const [name, setName] = useState();
    const [temp, setTemp] = useState();
    const [desc, setDesc] = useState();
    const [icon, setIcon] = useState([]);
// Api call to get data from OpenWeatherMap
    function getInfo() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ inputRef.current.value +`&appid=${apiKey}&units=imperial`)
        .then(response => {
            console.log(response)
            nameValue = response.data.name;
            setName(nameValue);
            descValue = response.data.weather[0].description;
            setDesc(descValue);
            tempValue = response.data.main.temp;
            setTemp(Math.round(tempValue)+'°F');
            iconValue = response.data.weather[0].icon;
            setIcon([`https://openweathermap.org/img/wn/${iconValue}@2x.png`]);
        })
        .catch(e => console.log(e))
        .catch(e => alert('invalid city name'))
    }
// event listener for when the enter key is pressed -- added functionality
    function keyDown(event) {
        event = event || window.event
        var keyCode = event.keyCode || event.charCode;
        if (keyCode === 13) {
            getInfo()
        }
    }

    return (
        <div className='weather-app-wrapper'>
            {/*<NavP /> // to be fully removed post completion of dropdown */}
            <div className="weather-app-container">
                <div className="weather-header-wrapper">
                    <h1 className="weather-title">Hows the Weather?</h1>
                </div>
                <div className="weather-input-wrapper">
                    <input type="text" className="weather-text" placeholder='Enter your city.' ref={inputRef} onKeyDown={keyDown}/>
                    <button className="weather-submit" onClick={getInfo}>Submit</button>
                </div>
                <div className="weather-content">
                    <div className="weather-name">{name}</div>
                    <div className="weather-temp">{temp}</div>
                    <div className="weather-description">{desc}</div>
                    <div className="weather-icon">{icon.map((src) => {
                        return <img id='weather-icon' alt='weather icon' key={iconValue} src={src}/>
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
