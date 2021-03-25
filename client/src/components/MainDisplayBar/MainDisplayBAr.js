import './MainDisplayBar.css'
import { useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

function MainDisplayBar(){
    
    const {data} = useContext(WeatherContext)
    const getTemperature = () => {
        if(data.main){
            return Math.round((data.main.temp - 273.15)*100)/100
        }
    }

    return(
        <div className="mainDisplayBar">
            <span>{getTemperature()}</span>
            <span>°C</span>
        </div>
    )
}

export default MainDisplayBar