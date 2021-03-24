import React from 'react'

const WeatherContext = React.createContext({
    theme: '',
    setTheme: (value) => {}
})

export default WeatherContext