import React, { useState } from 'react'

function Forecast() {

    let [responseObj, setResponseObj] = useState({});    

    const getForecast = () => {

      fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(response => {
          setResponseObj(response)
      })
    }

    return (
      <div className="forecast">
        <div>
            {getForecast}
        </div>

      </div>
    );
  }
  
  export default Forecast;
  