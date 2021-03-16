
import { useState, useEffect } from 'react'
import './Forecast.css';

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
        .then(data => setResponseObject( data ));
    }

    useEffect(() => {
        getForecast()
    }, []) 

    return (
        <div className="forecast">
            {/* {JSON.stringify(responseObject)} */}
        </div>
    )
}

export default Forecast;
