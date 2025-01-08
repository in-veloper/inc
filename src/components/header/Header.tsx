import React, { useState, useEffect } from 'react'
import { useGeoLocation } from '../../util/useGeoLocation'
import { IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import weatherDescKo from '../../util/weatherDescKo'
import axios from 'axios'
import { FaLocationArrow } from 'react-icons/fa6'
import { FaSearch } from "react-icons/fa"
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
    const [searchQuery, setSearchQuery] = useState('')

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

    const handleSearch = () => {

    }

    return (
        <div className="app-header">
            <div className='logo-div' onClick={handleLogoClick}>
                <Typography
                    variant='h5'
                    sx={{
                        display: "inline",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                        fontWeight: 400,
                        color: "#4829B2",
                    }}
                >
                    I
                </Typography>
                <Typography
                    variant='h5'
                    sx={{
                        display: "inline",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                        fontWeight: 400,
                        color: "#B32942",
                    }}
                >
                    Nu
                </Typography>
                <Typography
                    variant='h5'
                    sx={{
                        display: "inline",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                        fontWeight: 400,
                        color: "#4829B2",
                    }}
                >
                    Co
                </Typography>
            </div>
            <div className='menu-bar'>
                {menuItems.map((item) => (
                    <Link key={item.id} to={item.path} className='menu-item'>
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className='search-bar'>
                <TextField 
                    variant='outlined'
                    placeholder='전체 검색'
                    size='small'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') handleSearch()
                    }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <FaSearch style={{ color: "#4829B2"}} />
                                </InputAdornment>
                            )
                        }
                    }}
                    sx={{
                        width: '250px',
                        borderRadius: '5px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '5px',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#4829B2",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#4829B2",
                                borderWidth: "1px"
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#4829B2',
                        },
                    }}
                >
                </TextField>
            </div>
            
            <div className="weather-info">
                {weather && cityName ? (
                    <>
                        <img src={weather?.icon} alt={weather?.description}/>
                        <div className='weather-cityName'>
                            {cityName}
                            <FaLocationArrow className='location-icon' />
                        </div> 
                        <div className='weather-temp'>
                            <span><b className='temp-text'>온도</b> {weather?.temp}°</span>
                        </div>
                        <div className='weather-humidity'>
                            <span><b className='humidity-text'>습도</b> {weather?.humidity}%</span>
                        </div>
                        <div className='weather-description'>
                            {weather?.description}
                        </div>
                    </>
                ):(
                    <>
                        <div className='info-message'>날씨 정보 받아오는 중</div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header