import './MainDisplayBar.css'
import { useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

function MainDisplayBar(){
    
    const data = useContext(WeatherContext)

    const getTemperature = () => {
        if(data.main){
            return data.main.temp
        }
    }

    return(
        <div class="mainDisplayBar">
            <span>{getTemperature()}</span>
            <span>°C</span>
        </div>
    )
}

export default MainDisplayBar