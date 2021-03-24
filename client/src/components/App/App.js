import './App.css';

import Searchbar from '../Searchbar/Searchbar'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import WeatherContext  from '../../js/contexts/weatherContext'
import ThemeContext from '../../js/contexts/ThemeContext'
import { useState, } from 'react'

function App() {

  const [theme, setTheme] = useState ('clear-sky')
  const [data, setData ] = useState ({})


  return (
    <div className={'app ' + theme} >
      <ThemeContext.Provider value={{theme, setTheme}}>
        <WeatherContext.Provider value={{data, setData}}>
          <Searchbar/>
          <Main/>
          <Footer/>
        </WeatherContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
