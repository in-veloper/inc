import React, { useEffect, useState } from 'react'
// import MenuCard from '../common/MenuCard'
// import { menuItems } from '../../consts/MenuItems'
import Slider from "react-slick"
import carouselTest1 from '../../asset/img/dashboard/carousel_test_1.jpg'
import carouselTest2 from '../../asset/img/dashboard/carousel_test_2.jpg'
import carouselTest3 from '../../asset/img/dashboard/carousel_test_3.jpg'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { WiDust } from "react-icons/wi";
import { useGeoLocation } from '../../util/useGeoLocation'
import axios from 'axios'
import weatherDescKo from '../../util/weatherDescKo'
import { FaLocationArrow } from 'react-icons/fa6'
import { PiCloudSunDuotone } from "react-icons/pi";
import { TbMessageReport } from "react-icons/tb";
import { TbMessage2Bolt } from "react-icons/tb";
import { TbMessage2Heart } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style/dashboard.css'
import { hideBlock, showBlock } from '../../util/blockLoader'

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

const carouselItems = [
    { id: 1, image: carouselTest1, title: "Item 1", description: "This is carousel item 1"},
    { id: 2, image: carouselTest2, title: "Item 2", description: "This is carousel item 2"},
    { id: 3, image: carouselTest3, title: "Item 3", description: "This is carousel item 3"}
]


const Dashboard: React.FC = () => {
    const { location, error } = useGeoLocation(geolocationOptions)
    const [weather, setWeather] = useState<Weather | null>(null)
    const [cityName, setCityName] = useState('')

    const getWeather = async (latitude: number, longitude: number) => {
        try {
            const weatherBlock = document.querySelector('.weather-block')
            if (weatherBlock) weatherBlock.classList.add('blocked')
            showBlock('.weather-block', '')

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
        } finally {
            const weatherBlock = document.querySelector('.weather-block')
            if (weatherBlock) weatherBlock.classList.remove('blocked')
            hideBlock('.weather-block')
        }
    }

    const getCityNameFromKakao = async (latitude: number, longitude: number) => {
        try {
            showBlock('.weather-block', '')

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
        } finally {
            hideBlock('.weather-block')
        }
    }

    useEffect(() => {
        if(location) {
            getWeather(location.latitude, location.longitude)
            getCityNameFromKakao(location.latitude, location.longitude)
        }
    }, [location])


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    }
    
    return (
        <div className="dashboard">
            <div className='first-card-section'>
                <div className='carousel-section'>
                    <Slider {...sliderSettings}>
                        {carouselItems.map((item) => (
                            <div key={item.id} className='carousel-item' >
                                <img src={item.image} alt={item.title} className='carousel-image' />
                            </div>
                        ))}
                    </Slider>

                </div>
                <div className='weather-card'>
                    <Card className='weather-block' sx={{ width: '300px', height: '300px' }}>
                        <CardHeader 
                            className='dashboard-card-header'
                            avatar={
                                <PiCloudSunDuotone style={{ fontSize: 30 }} />
                            }
                            action={
                                <div className='weather-city'>
                                    {cityName}
                                    <FaLocationArrow className='location-icon' />
                                </div>
                            }
                            title={<b>날씨</b>}
                        />
                        <CardContent>
                            <div className="weather-info">
                                <img src={weather?.icon} alt={weather?.description} className='dashboard-weather-icon'/>
                                <div className='weather-text'>
                                    <div className='weather-main'>
                                        <div>
                                            <span><b className='dashboard-temp-text'>온도</b> <span className='temp-feature'>{weather?.temp}</span></span>
                                        </div>
                                        <div>
                                            <span><b className='dashboard-humidity-text'>습도</b> <span className='humidity-feature'>{weather?.humidity}</span></span>
                                        </div>
                                    </div>
                                    <div className='dashboard-weather-description'>
                                        {weather?.description}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className='second-card-section'>
                <Card sx={{ flex: 1, height: '350px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>공지사항</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            공지사항 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>

                <Card sx={{ flex: 1, height: '350px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessage2Bolt style={{ fontSize: 30 }} />
                        }
                        title={<b>최신글</b>}
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            최신글 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>

                <Card sx={{ flex: 1, height: '350px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessage2Heart style={{ fontSize: 30 }} />
                        }
                        title={<b>인기글</b>}
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            인기글 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>
            </div>

            {/* {menuItems.map((item) => (
                <MenuCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    path={item.path}
                />
            ))} */}
        </div>
    )
}

export default Dashboard