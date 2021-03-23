import './App.css';

import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import WeatherContext  from '../../js/contexts/weatherContext'
import { useState, useEffect } from 'react'
import { themeNames } from '../../js/themes'

function App() {

  let [responseObject, setResponseObject] = useState({})
  let [themeName, setThemeName] = useState('')

  useEffect(() => {
    fetch('mock.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {

      setResponseObject( data )

      const weatherMain = data.weather[0].main

      if(weatherMain) setThemeName( themeNames[weatherMain])
      else setThemeName('clear-weather')
    })
  }, [])

  return (
    <div className={"app " + themeName} >
      <WeatherContext.Provider value={responseObject}>
        <Main/>
        <Footer/>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
