import './Searchbar.css'

import WeatherContext from '../../js/contexts/weatherContext'
import ThemeContext from '../../js/contexts/ThemeContext'
import { themeNames } from '../../js/themes'

import { useContext } from 'react'


function Searchbar() {

    const {setData} = useContext(WeatherContext)
    const {setTheme} = useContext(ThemeContext)

    const handleEvent = (e) => {
        if(e.key === 'Enter') getData(e.target.value)
    }

    const getData = (value) => {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=" + value, {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(json => {

            setData(json)
            
            const weatherMain = json.weather[0].main
            if(weatherMain) setTheme(themeNames[weatherMain])

        })
    }

    return (
        <div className="searchbar">
            <input type="text" placeholder="search..." onKeyDown={handleEvent}></input>
        </div>
    )
}

export default Searchbar;