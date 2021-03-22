import './UpperDisplayBar.css'
import { useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

function UpperDisplayBar(){

    const data = useContext(WeatherContext)

    const getName = () => {
        return data.name
    }

    const getWeatherDescription = () => {
        if(data.weather){
            return data.weather[0].description
        }    
    }

    return(
        <div class="upperDisplayBar">
                <p className="town">{getName()}</p>
                <p className="weatherDescription">{getWeatherDescription()}</p>
        </div>
    )
}

export default UpperDisplayBar