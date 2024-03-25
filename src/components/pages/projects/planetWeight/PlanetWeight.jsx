import React from 'react'
//import NavP from '../../NavP' // to be fully removed post completion of the dropdown


//functional component
function PlanetWeight() {
    return (
        <div className='planet-app'>
            {/*<NavP /> // to be fully removed post completion of dropdown */}
            <div className="planet-wrapper">
                <div className="planet-title">Calculate the weight of an object on a planet</div>
                <div className="planet-nav">
                    <input type="text" className="planet-input" placeholder='Mass in Kilograms'/>
                    <select name="planets" id="options" className="planet-select">
                        <option>--Select a Planet--</option>
                        <option value="0">Earth</option>
                        <option value="1">Jupiter</option>
                        <option value="2">Mars</option>
                        <option value="3">Mercury</option>
                        <option value="4">Moon</option>
                        <option value="5">Neptune</option>
                        <option value="6">Pluto</option>
                        <option value="7">Saturn</option>
                        <option value="8">Uranus</option>
                        <option value="9">Venus</option>
                    </select>
                    <button className="planet-submit">Calculate Weight</button>
                </div>
                <div className="planet-result">
                    <img src='' alt=''/> {/* this can be mapped out? or set the src and alt to be the variables */}
                    
                </div>
            </div>
        </div>
    )
}

export default PlanetWeight
