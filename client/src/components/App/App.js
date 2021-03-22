import './App.css';

import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import WeatherContext  from '../../js/contexts/weatherContext'
import {useState, useEffect} from 'react'

function App() {

  let [responseObject, setResponseObject] = useState({})


  useEffect(() => {
    fetch('mock.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setResponseObject( data ))
  }, [])

  return (
    <div className="app">
      <WeatherContext.Provider value={responseObject}>
        <Main/>
        <Footer/>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
