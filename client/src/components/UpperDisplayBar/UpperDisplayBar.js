import './UpperDisplayBar.css'
import { useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

function UpperDisplayBar(){

    const {data} = useContext(WeatherContext)

    const getIconId =  () => {

        if(data.weather) 
        return data.weather[0].icon
    }
    

    const getName = () => {
        return data.name
    }

    const getWeatherDescription = () => {
        if(data.weather){
            return data.weather[0].description
        }    
    }

    return(
        <div className="upperDisplayBar">
                <p className="town">{getName()}</p>
                <div>
                    <img type="icon" src={"http://openweathermap.org/img/wn/"+ getIconId() +".png"} />
                    <span className="weatherDescription">{getWeatherDescription()}</span>
                </div>
        </div>
    )
}

export default UpperDisplayBar