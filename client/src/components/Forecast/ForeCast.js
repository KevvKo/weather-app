import './Forecast.css';

import { useContext } from 'react'
import WeatherContext from '../../js/contexts/weatherContext'

import UpperDisplayBar from '../UpperDisplayBar/UpperDisplayBar'
import MainDisplayBar from '../MainDisplayBar/MainDisplayBAr'
import LowerDisplayBar from '../LowerDisplayBar/LowerDisplayBar'

function Forecast() {

    const data = useContext(WeatherContext)

    return (
        <div className="forecast">
            { data.cod === 200 &&
                <div>
                <UpperDisplayBar />
                    <div className="data">
                        <MainDisplayBar />
                        <LowerDisplayBar />
                    </div>
                </div>
            }
        </div>
    )
}

export default Forecast;
