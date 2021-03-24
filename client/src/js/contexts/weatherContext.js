import React from 'react'

const WeatherContext = React.createContext({
    data: {},
    setData: (value) => {}
})

export default WeatherContext