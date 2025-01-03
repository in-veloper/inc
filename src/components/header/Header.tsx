import React, { useEffect } from 'react'
import { useGeoLocation } from '../../util/useGeoLocation.ts'
import axios from 'axios'
import './style/header.css'

const API_KEY = process.env.REACT_APP_WEATHER_KEY

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24
}

const Header: React.FC = () => {
    const { location, error } = useGeoLocation(geolocationOptions)

    const getWeather = async (latitude, longitude) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

            const weatherId = response.data.weather[0].id
            const weatherIcon = response.data.weather[0].inc_icon
            const weatherIconAddress = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            const temp = Math.round(response.data.main.temp)
        } catch(error) {
            console.log('Openweather 날씨 정보 조회 중 Error', error)
        }
    }

    useEffect(() => {
        if(location) {
            getWeather(location.latitude, location.longitude)
        }
    }, [location])

    return (
        <div className="app-header">
            <img 
                src="/inc_icon.png"
                className="logo_icon" 
            />
            <b>Industrial Nurse Community</b>
            <div className="weather-info">
                {location?.latitude} {location?.longitude}
            </div>
        </div>
    )
}

export default Header