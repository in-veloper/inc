import React, { useState, useEffect } from 'react'
import { useGeoLocation } from '../../util/useGeoLocation'
import weatherDescKo from '../../util/weatherDescKo'
import axios from 'axios'
import { FaLocationArrow } from 'react-icons/fa6'
import { FaTemperatureHigh } from "react-icons/fa6"
import { RiWaterPercentLine } from "react-icons/ri"
import { menuItems } from '../../consts/MenuItems'
import './style/header.css'
import { Link, useNavigate } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_WEATHER_KEY
const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_MAP_API_KEY

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24
}

type Weather = {
    description: string
    name: string
    temp: number
    humidity: number
    icon: string
}

const Header: React.FC = () => {
    const { location, error } = useGeoLocation(geolocationOptions)
    const [weather, setWeather] = useState<Weather | null>(null)
    const [cityName, setCityName] = useState('')
    const navigate = useNavigate()

    const getWeather = async (latitude: number, longitude: number) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`);

            const weatherId = response.data.weather[0].id
            const cityName = response.data.name
            const weatherKo = weatherDescKo[weatherId]
            const weatherIcon = response.data.weather[0].icon
            const weatherIconAddress = `http://openweathermap.org/img/wn/${weatherIcon}.png`
            const temp = Math.round(response.data.main.temp)
            const humidity = response.data.main.humidity

            setWeather({
                description: weatherKo,
                name: cityName,
                temp: temp,
                humidity: humidity,
                icon: weatherIconAddress
            })
        } catch(error) {
            console.log('Openweather 날씨 정보 조회 중 Error', error)
        }
    }

    const getCityNameFromKakao = async (latitude: number, longitude: number) => {
        try {
            const response = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
                {
                    headers: {
                        Authorization: `KakaoAK ${KAKAO_API_KEY}`
                    }
                }
            )

            const cityName = response.data.documents[0].region_2depth_name
            setCityName(cityName)
        } catch(error) {
            console.log('Kakao Map API 호출 중 Error', error)
        }
    }

    useEffect(() => {
        if(location) {
            getWeather(location.latitude, location.longitude)
            getCityNameFromKakao(location.latitude, location.longitude)
        }
    }, [location])

    const handleLogoClick = () => {
        navigate('/')
    }

    return (
        <div className="app-header">
            <img 
                src="/inc_icon.png"
                className="logo_icon"
                alt="logo"
                onClick={handleLogoClick}
            />
            <div className='menu-bar'>
                {menuItems.map((item) => (
                    <Link key={item.id} to={item.path} className='menu-item'>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="weather-info">
                {weather && cityName ? (
                    <>
                        <img src={weather?.icon} alt={weather?.description}/>
                        <div className='weather-cityName'>
                            {cityName}
                            <FaLocationArrow className='location-icon' />
                        </div> 
                        <div className='weather-detail'>
                            <div className='weather-temp-humidity'>
                                <span><FaTemperatureHigh className='temp-icon' /> {weather?.temp}°</span>
                                <span><RiWaterPercentLine className='humid-icon' /> {weather?.humidity}%</span>
                            </div>
                            <div className='weather-description'>{weather?.description}</div>
                        </div>
                    </>
                ):(
                    <>
                        <b className='info-message'>날씨 정보 받아오는 중</b>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header