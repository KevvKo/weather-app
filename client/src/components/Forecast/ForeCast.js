
import { useState, useEffect } from 'react'
import './Forecast.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Forecast() {

    let [responseObject, setResponseObject] = useState({})

    const getForecast = () => {

        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Jena", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => setResponseObject( data ))
        .then(data => console.log(responseObject))

    }

    useEffect(() => {
        getForecast()
    }, []) 


    const getName = () => {
        return "Jena"
        // return responseObject.name
    }

    const getTemperature     = () => {
        return 4
        if(responseObject.main){
            // return responseObject.main.temp
        }
    }

    const getMaxTemperature     = () => {
        return 6
        // if(responseObject.main){
        //     return responseObject.main.temp_max
        // }    
    }

    const getMinTemperature     = () => {
        return 0
        // if(responseObject.main){
        //     return responseObject.main.temp_min
        // }    
    }

    const getWeatherDescription     = () => {
        return 'cloudly'
        // if(responseObject.weather){
        //     return responseObject.weather[0].description
        // }    
    }


    return (
        <div className="forecast">
            <div className="weather-panel">
                <div className="temperature">
                    <span>
                        {getTemperature()}
                    </span>
                </div>
                <div className="data">
                    <span>
                    °C
                    </span>
                    <span>
                        <ArrowUpwardIcon style={{ fontSize: 15 }}/>
                        <span>
                            {getMaxTemperature()}°
                        </span>

                    </span>
                    <span>
                        <ArrowDownwardIcon style={{ fontSize: 15 }}/>
                        <span>
                            {getMinTemperature()}°
                        </span>
                    </span>
                </div>
            </div>
            <div>
                <p>{getName()}</p>
                <p>{getWeatherDescription()}</p>
            </div>
        </div>
    )
}

export default Forecast;
