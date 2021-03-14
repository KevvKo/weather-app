import '../css/WeatherCard.css'

import WeatherForecast from './weatherForcast'
import WeatherDisplay from './weatherDisplay'

function WeatherCard() {
  return (
    <div className="weatherCard">
      <div className="content">
        <WeatherDisplay />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default WeatherCard;
