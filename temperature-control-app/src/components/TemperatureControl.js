import React, { useState } from 'react'
import './TemperatureControl.css'

const TemperatureControl =() => {
const [temperatureValue,setTemperatureValue] = useState(10)
const [screenColor,setScreenColor] =useState('')


const increaseHandler = () => {
const newTemperature = temperatureValue + 1

    setTemperatureValue(newTemperature)

    if(newTemperature >=15){
        setScreenColor('hot')
    }
}
const decreaseHandler = () => {
    const newTemperature = temperatureValue - 1

    setTemperatureValue(newTemperature)

    if(newTemperature<15){
        setScreenColor('cold')
    }
}


	return (
		<div className='app'>
			<div className={`app__screen ${screenColor}`}>{temperatureValue}°C</div>
			<div className='app__buttons'>
				<button onClick={increaseHandler}>+</button>
				<button onClick={decreaseHandler}>-</button>
			</div>
		</div>
	)
}

export default TemperatureControl
