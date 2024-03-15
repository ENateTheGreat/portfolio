import React, {useState} from 'react'
import NavP from '../../NavP'

function WeatherApp() {

    const [name, setName] = useState();
    const [temp, setTemp] = useState();
    const [desc, setDesc] = useState();
    const [icon, setIcon] = useState();

    return (
        <div className='weather-app-wrapper'>
            <NavP />
            <div className="weather-app-container">
                <div className="weather-header-wrapper">
                    <h1 className="weather-title">Hows the Weather?</h1>
                </div>
                <div className="weather-input-wrapper">
                    <input type="text" className="weather-text" placeholder='Enter your city.' />
                    <button className="weather-submit">Submit</button>
                </div>
                <div className="weather-content">
                    <div className="weather-name"></div>
                    <div className="weather-temp"></div>
                    <div className="weather-description"></div>
                    <div className="weather-icon"></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
