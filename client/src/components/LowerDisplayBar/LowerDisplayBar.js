import './LowerDisplayBar.css'
import { useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

function LowerDisplayBar(){

    const {data} = useContext(WeatherContext)

    const getMaxTemperature = () => {
        if(data.main){
            return Math.round((data.main.temp_max - 273.15)*100)/100
        }    
    }

    const getMinTemperature = () => {
        if(data.main){
            return Math.round((data.main.temp_min - 273.15)*100)/100
        }    
    }

    return(
        <div className="lowerDisplayBar">
            <div>
                <i className="wi wi-thermometer"></i>
                <span>{getMaxTemperature()}°</span>
            </div>
            <div>
                <i className="wi wi-thermometer-exterior"></i>
                <span>{getMinTemperature()}°</span>
            </div>
        </div>
    )
}

export default LowerDisplayBar