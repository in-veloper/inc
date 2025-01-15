import React, { useEffect, useState } from 'react'
// import MenuCard from '../common/MenuCard'
// import { menuItems } from '../../consts/MenuItems'
import Slider from "react-slick"
import carouselTest1 from '../../asset/img/dashboard/carousel_test_1.jpg'
import carouselTest2 from '../../asset/img/dashboard/carousel_test_2.jpg'
import carouselTest3 from '../../asset/img/dashboard/carousel_test_3.jpg'
import bannerTest1 from '../../asset/img/banner/band_image.jpg'
import bannerTest2 from '../../asset/img/banner/centrum_image.jpg'
import bannerTest3 from '../../asset/img/banner/tylenol_image.jpg'
import mediaTest1 from '../../asset/img/media/media_test1.jpeg'
import mediaTest2 from '../../asset/img/media/media_test2.jpg'
import mediaTest3 from '../../asset/img/media/media_test3.jpg'
import mediaTest4 from '../../asset/img/media/media_test4.jpeg'
import mediaTest5 from '../../asset/img/media/media_test5.jpg'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { WiDust } from "react-icons/wi"
import { Box, Chip, Paper, Stack } from '@mui/material'
import { useGeoLocation } from '../../util/useGeoLocation'
import axios from 'axios'
import weatherDescKo from '../../util/weatherDescKo'
import { FaLocationArrow } from 'react-icons/fa6'
import { PiCloudSunDuotone } from "react-icons/pi"
import { TbMessageReport } from "react-icons/tb"
import { TbMessage2Bolt } from "react-icons/tb"
import { TbMessage2Heart } from "react-icons/tb"
import FaceIcon from '@mui/icons-material/Face'
import LoyaltyIcon from '@mui/icons-material/Loyalty'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import GavelIcon from '@mui/icons-material/Gavel'
import ShortcutIcon from '../../asset/icon/shortcut.png'
import IssueIcon from '../../asset/icon/issue.png'
import QuestionAndAnswer from '../../asset/icon/questionandanswer.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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

const mediaItems = [
    { id: 1, image: mediaTest1, title: "Item 1", description: "This is carousel item 1"},
    { id: 2, image: mediaTest2, title: "Item 2", description: "This is carousel item 2"},
    { id: 3, image: mediaTest3, title: "Item 3", description: "This is carousel item 3"},
    { id: 4, image: mediaTest4, title: "Item 3", description: "This is carousel item 4"},
    { id: 5, image: mediaTest5, title: "Item 3", description: "This is carousel item 5"}
]


const frequentMenuItems = [
    { id: 1, icon: <img src={IssueIcon} alt='issue' style={{ width: 40 }} />, title: '보건이슈 공유' },
    { id: 2, icon: <img src={QuestionAndAnswer} alt='questionandanswer' style={{ width: 40 }} />, title: '질문과 답변' },
    { id: 3, icon: <TbMessage2Heart style={{ fontSize: '24px', color: '#FFD700' }} />, title: '일반건강진단' },
    { id: 4, icon: <TbMessageReport style={{ fontSize: '24px', color: '#FFD700' }} />, title: '특수건강진단' },
    { id: 5, icon: <TbMessage2Bolt style={{ fontSize: '24px', color: '#FFD700' }} />, title: '안전관련자료' },
    { id: 6, icon: <TbMessage2Heart style={{ fontSize: '24px', color: '#FFD700' }} />, title: '구인왕' },
]

const advertiseBanners = [
    {
        id: 1,
        title: "박스 뜯는 번거로움 NO!",
        description: "대용량 밴드",
        image: bannerTest1,
        width: "35%", 
        height: "150px", 
      },
      {
        id: 2,
        title: "눈 건강관리",
        description: "1회용 인공눈물",
        image: bannerTest2,
        width: "30%", 
        height: "150px", 
      },
      {
        id: 3,
        title: "똑똑 복약 퀴즈이벤트",
        description: "쿠폰도 받고 복약 상식도 UP",
        image: bannerTest3,
        width: "45%", 
        height: "150px", 
      },
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

    const handleClickMediaChip = () => {

    }

    const chipItems = [
        { id: 1, label: "미디어1", onClick: handleClickMediaChip },
        { id: 2, label: "미디어2", onClick: handleClickMediaChip },
        { id: 3, label: "미디어3", onClick: handleClickMediaChip },
        { id: 4, label: "미디어4", onClick: handleClickMediaChip },
        { id: 5, label: "미디어5", onClick: handleClickMediaChip },
        { id: 6, label: "미디어6", onClick: handleClickMediaChip },
        { id: 7, label: "미디어7", onClick: handleClickMediaChip },
    ]

    const stackItems = [
        { id: 1, text: "구인왕", icon: <FaceIcon />},
        { id: 2, text: "썸 WHERE", icon: <LoyaltyIcon /> },
        { id: 3, text: "약품정보", icon: <VaccinesIcon /> },
        { id: 4, text: "관련 법령정보", icon: <GavelIcon /> }
    ]
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false
    }

    const mediaSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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
                    <Card className='weather-block'>
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

                <div className='stack-section'>
                    <Box className="stack-box">
                        {stackItems.map((item, index) => (
                            <Paper
                                key={item.id}
                                className='stack-paper'
                            >
                                <Stack spacing={2} direction="row" className='stack-item'>
                                    <div className='stack-text'>
                                        <span className='stack-icon'>{item.icon}</span>
                                        <span className='stack-span'>{item.text}</span>
                                    </div>
                                </Stack>
                                <span className='stack-link'>
                                    <img src={ShortcutIcon} alt='shortcut' />
                                </span>
                          </Paper>
                        ))}
                    </Box>
                </div>
            </div>

            <div className='frequent-menu-section'>
                {frequentMenuItems.map((menu) => (
                    <div key={menu.id} className='frequent-menu-item'>
                        <div className='frequent-menu-icon'>{menu.icon}</div>
                        <p className='frequent-menu-title'>{menu.title}</p>
                    </div>
                ))}

            </div>

            <div className='second-card-section'>
                <Card className='announcement-article-card' sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>공지사항</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon  style={{ color: '#FFF' }}/>
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

                <Card className='latest-article-card' sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessage2Bolt style={{ fontSize: 30 }} />
                        }
                        title={<b>최신글</b>}
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon style={{ color: '#FFF' }} />
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

                <Card className='popular-article-card' sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessage2Heart style={{ fontSize: 30 }} />
                        }
                        title={<b>인기글</b>}
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon style={{ color: '#FFF' }}/>
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

            <div className='advertise-banner-section'>
                {advertiseBanners.map((banner) => (
                    <div
                        key={banner.id}
                        className='advertise-banner'
                        style={{
                            width: banner.width,
                            height: banner.height
                        }}
                    >
                        <img src={banner.image} alt={banner.title} className='advertise-banner-image' />
                    </div>
                ))}
            </div>

            <div className='third-card-section'>
                <Card sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>메뉴1</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            메뉴1 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>

                <Card sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>메뉴2</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon  />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            메뉴2 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>

                <Card sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>메뉴3</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            메뉴3 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>
            </div>

            <div className='fourth-card-section'>
                <Card sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>메뉴4</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon  />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            메뉴4 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>

                <Card sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>메뉴5</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon  />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            메뉴5 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>

                <Card sx={{ flex: 1, height: '250px' }}>
                    <CardHeader 
                        className='dashboard-card-header'
                        avatar={
                            <TbMessageReport style={{ fontSize: 30 }} />
                        }
                        title={<b>메뉴6</b>} 
                        action={
                            <IconButton aria-label='settings'>
                                <MoreVertIcon  />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            메뉴6 내용이 여기에 표시됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer' }}>
                            더보기
                        </button>
                    </CardActions>
                </Card>
            </div>

            <div className='fifth-card-section'>
                <div className='first-column'>
                    <Card sx={{ flex: 1, height: '120px', marginBottom: '10px' }}>
                        <CardHeader 
                            className='dashboard-card-header'
                            avatar={<TbMessageReport style={{ fontSize: 30 }} />}
                            title={<b>세로 카드 1</b>} 
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                세로 카드 1 내용
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ flex: 1, height: '120px' }}>
                        <CardHeader 
                            className='dashboard-card-header'
                            avatar={<TbMessage2Bolt style={{ fontSize: 30 }} />}
                            title={<b>세로 카드 2</b>} 
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                세로 카드 2 내용
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className='second-column'>
                    <Card sx={{ flex: 1, height: '400px' }}>
                        <CardHeader 
                            className='dashboard-card-header'
                            avatar={<TbMessage2Heart style={{ fontSize: 30 }} />}
                            title={<b>두 번째 열 카드</b>} 
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                두 번째 열 카드 내용
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className='third-column'>
                    <Card sx={{ flex: 1, height: '400px' }}>
                        <CardHeader 
                            className='dashboard-card-header'
                            avatar={<TbMessage2Heart style={{ fontSize: 30 }} />}
                            title={<b>세 번째 열 카드</b>} 
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                세 번째 열 카드 내용
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className='media-section'>
                <div className='media-chips'>
                    {chipItems.map((item) => (
                        <Chip 
                            key={item.id}
                            label={item.label}
                            variant='outlined'
                            onClick={item.onClick}
                        />
                    ))}
                </div>
                <div className='slider-container'>
                    <Slider {...mediaSliderSettings}>
                        {mediaItems.map((item) => (
                            <div key={item.id} className='media-item'>
                                <img src={item.image} alt={item.title} className='media-image' />
                                <p className='media-title'>{item.title}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
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