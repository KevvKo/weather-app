import './WeatherCard.css'
import Forecast from '../Forecast/ForeCast'

function WeatherCard() {
  
  return (
    <div className="weatherCard">
      <div className="content">
        <Forecast />
      </div>
    </div>
  );
}

export default WeatherCard;
