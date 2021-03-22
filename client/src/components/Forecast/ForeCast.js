import './Forecast.css';
import { useState, useEffect, useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

function Forecast() {
    
    const data = useContext(WeatherContext)

    const getName = () => {
        return data.name
    }

    const getTemperature = () => {
        if(data.main){
            return data.main.temp
        }
    }

    const getMaxTemperature = () => {
        if(data.main){
            return data.main.temp_max
        }    
    }

    const getMinTemperature = () => {
        if(data.main){
            return data.main.temp_min
        }    
    }

    const getWeatherDescription = () => {
        if(data.weather){
            return data.weather[0].description
        }    
    }

    const getHumidity = () => {
        if(data.main){
            return data.main.humidity || ''
        }    
    }

    const getWindSpeed = () => {
        if(data.wind){
            return data.wind.speed || ''
        }    
    }

    const getPressure = () => {
        if(data.main){
            return data.main.pressure || ''
        }    
    }

    return (
        <div className="forecast">
            <div>
                <p className="town">{getName()}</p>
                <p className="weatherDescription">{getWeatherDescription()}</p>
            </div>
            <div className="temperature">
                <span>{getTemperature()}</span>
                <span>°C</span>
            </div>
            <div className="data">
                <div>
                    <i className="wi wi-thermometer"></i>
                    <span>{getMaxTemperature()}°</span>
                </div>
                <div>
                    <i className="wi wi-thermometer-exterior"></i>
                    <span>{getMinTemperature()}°</span>
                </div>
            </div>
        </div>
    )
}

export default Forecast;
