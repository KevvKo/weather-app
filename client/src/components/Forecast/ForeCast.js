import './Forecast.css';
import { useState, useEffect } from 'react'

function Forecast() {

    let [responseObject, setResponseObject] = useState({})
    
    let iconUrl = '' ;

    const getForecast = () => {

            fetch('mock.json'
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            })
            .then(response => response.json())
            .then(data => setResponseObject( data ))
    
    //     fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Jena", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f",
    //             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => setResponseObject( data ))
    //     .then(data => console.log(responseObject))

    }

    useEffect(() => {
        getForecast()
    }, []) 


    const getName = () => {
        return responseObject.name
    }

    const getTemperature = () => {
        if(responseObject.main){
            return responseObject.main.temp
        }
    }

    const getMaxTemperature = () => {
        if(responseObject.main){
            return responseObject.main.temp_max
        }    
    }

    const getMinTemperature = () => {
        if(responseObject.main){
            return responseObject.main.temp_min
        }    
    }

    const getWeatherDescription = () => {
        if(responseObject.weather){
            return responseObject.weather[0].description
        }    
    }

    const getHumidity = () => {
        if(responseObject.main){
            return responseObject.main.humidity || ''
        }    
    }

    const getWindSpeed = () => {
        if(responseObject.wind){
            return responseObject.wind.speed || ''
        }    
    }

    const getPressure = () => {
        if(responseObject.main){
            return responseObject.main.pressure || ''
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
