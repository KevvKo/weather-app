import './Main.css'
import Forecast from '../Forecast/ForeCast'
import {useState, useEffect, useContext} from 'react'
import { themeNames } from '../../js/themes'

import WeatherContext from '../../js/contexts/weatherContext'
import ThemeContext from '../../js/contexts/ThemeContext'

function Main() {

  const {data, setData } = useContext(WeatherContext)
  const {setTheme} = useContext(ThemeContext)

  useEffect(() => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Jena", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then( json => {
      setData(json)

      const weatherMain = json.weather[0].main
      if(weatherMain) setTheme(themeNames[weatherMain])


    })
  }, [])

  return (
    <div className="main">
      <Forecast />
    </div>
  );
}

export default Main;
