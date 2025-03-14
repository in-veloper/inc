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
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Chip, Paper, Stack, Typography, Card, CardContent, CardHeader, CardActions, List, ListItem, Badge } from '@mui/material'
import { useGeoLocation } from '../../util/useGeoLocation'
import axios from 'axios'
import weatherDescKo from '../../util/weatherDescKo'
import { FaLocationArrow } from 'react-icons/fa6'
import { PiCloudSunDuotone } from "react-icons/pi"
import { TbMessageReport } from "react-icons/tb"
import { TbMessage2Bolt } from "react-icons/tb"
import { TbMessage2Heart } from "react-icons/tb"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face'
import LoyaltyIcon from '@mui/icons-material/Loyalty'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import GavelIcon from '@mui/icons-material/Gavel'
import TextsmsIcon from '@mui/icons-material/Textsms';
import IssueIcon from '../../asset/icon/issue.png'
import QuestionAndAnswer from '../../asset/icon/questionandanswer.png'
import GeneralHealthCheck from '../../asset/icon/generalHealthCheck.png'
import SpecialHealthCheck from '../../asset/icon/specialHealthCheck.png'
import Job from '../../asset/icon/job.png'
import SafetyData from '../../asset/icon/safetyData.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { hideBlock, showBlock } from '../../util/blockLoader'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './style/dashboard.css'

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

type AirQuality = {
    pm10: number
    pm10Grade: string
    pm25: number
    pm25Grade: string
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
    { id: 1, icon: <img src={IssueIcon} alt='issue' style={{ width: 40, paddingLeft: 7 }} />, title: '보건이슈 공유' },
    { id: 2, icon: <img src={QuestionAndAnswer} alt='questionandanswer' style={{ width: 40 }} />, title: '질문과 답변' },
    { id: 3, icon: <img src={GeneralHealthCheck} alt='generalHealthCheck' style={{ width: 40, paddingLeft: 7 }} />, title: '일반건강진단' },
    { id: 4, icon: <img src={SpecialHealthCheck} alt='specialHealthCheck' style={{ width: 40, paddingLeft: 5 }} />, title: '특수건강진단' },
    { id: 5, icon: <img src={SafetyData} alt='safetyData' style={{ width: 40, paddingLeft: 3 }} />, title: '안전관련자료' },
    { id: 6, icon: <img src={Job} alt='job' style={{ width: 40 }} />, title: '구직왕' },
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

const announcementItems = [
    { title: '공지사항 제목 1', date: '2025.01.16' },
    { title: '공지사항 제목 2', date: '2025.01.11' },
    { title: '공지사항 제목 3', date: '2025.01.10' },
    { title: '공지사항 제목 4', date: '2025.01.16' },
    { title: '공지사항 제목 5', date: '2025.01.17' },
]

const latestArticles = [
    { menuName: '보건이슈 공유', title: '학회 이슈 공유', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'number1', commentCount: 1 },
    { menuName: '질문과 답변', title: 'Material-UI 커스터마이징', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'yiniwini', commentCount: 3 },
    { menuName: '일반건강진단', title: '1차 일반건강진단', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'admin', commentCount: 5 },
    { menuName: '특수건강진단', title: 'Material-UI 커스터마이징', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'admin' },
    { menuName: '안전관련자료', title: '안전관련자료', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'admin', commentCount: 7 },
]

const popularArticles = [
    { menuName: '질문과 답변', title: 'Material-UI 커스터마이징', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'yiniwini', commentCount: 3 },
    { menuName: '일반건강진단', title: '1차 일반건강진단', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'admin', commentCount: 5 },
    { menuName: '특수건강진단', title: 'Material-UI 커스터마이징', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'admin' },
    { menuName: '안전관련자료', title: '안전관련자료', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'admin', commentCount: 7 },
    { menuName: '보건이슈 공유', title: '학회 이슈 공유', avatar: <AccountCircleIcon className='latest-article-avatar' />, nickName: 'number1', commentCount: 1 },
]

const Dashboard = () => {
    const { location, error } = useGeoLocation(geolocationOptions)
    const [weather, setWeather] = useState<Weather | null>(null)
    const [stateCityName, setStateCityName] = useState('')
    const [cityName, setCityName] = useState('')
    const [airQuality, setAirQuality] = useState<AirQuality | null>(null)

    const convertStateCityName = (stateCityName: string) => {
        return stateCityName.replace(/특별시|광역시|자치시|도/g, '').trim()
    }

    const getWeather = async (latitude: number, longitude: number) => {
        try {
            const weatherBlock = document.querySelector('.weather-block')
            if (!weatherBlock) showBlock('.weather-block', '')

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
            if (weatherBlock) hideBlock('.weather-block')
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

            const stateCityName = response.data.documents[0].region_1depth_name
            const cityName = response.data.documents[0].region_2depth_name

            setStateCityName(stateCityName)
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

    const getAirQualityText = (grade: string) => {
        switch (grade) {
            case "1" : return "좋음"
            case "2" : return "보통"
            case "3" : return "나쁨"
            case "4" : return "매우 나쁨"
            default : return "정보 없음"
        }
    }

    const getAirQualityChipColor = (grade: string) => {
        switch (grade) {
            case "좋음" : return "primary"
            case "보통" : return "default"
            case "나쁨" : return "error"
            case "매우 나쁨" : return "error"
            default : return "default"
        }
    }

    const getAirQuality = async (stateCityName: string) => {
        try {
            const response = await axios.get(
                `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty`,
                {
                    params: {
                        serviceKey: "fSE2RXzuDLK99AFJ/DAlvG8jmzOgyDENumYIRPPyjTy4udjq+aLEzUfa0dNwNthYahhiKqzfqs+XXjWZzZPsfA==",
                        returnType: "json",
                        numOfRows: "1",
                        pageNo: "1",
                        sidoName: convertStateCityName(stateCityName),
                        ver: "1.0"
                    }
                }
            )

            const airData = response.data.response.body.items[0]
            
            setAirQuality({
                pm10: parseInt(airData.pm10Value, 10),
                pm10Grade: getAirQualityText(airData.pm10Grade),
                pm25: parseInt(airData.pm25Value, 10),
                pm25Grade: getAirQualityText(airData.pm25Grade)
            })
        } catch (error) {
            console.log("미세먼지 API 호출 중 Error")
        }
    }

    useEffect(() => {
        if(stateCityName) {
            const stateCityNameForApi = convertStateCityName(stateCityName)
            getAirQuality(stateCityNameForApi)
        }
    }, [stateCityName])

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
        { id: 1, text: "구직왕", icon: <FaceIcon />},
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
                                            <span><b className='dashboard-temp-text'>온도</b> <span className='temp-feature'><b>{weather?.temp}</b>°</span></span>
                                        </div>
                                        <div>
                                            <span><b className='dashboard-humidity-text'>습도</b> <span className='humidity-feature'><b>{weather?.humidity}</b><span className='humidity-percent'>%</span></span></span>
                                        </div>
                                    </div>
                                    <div className='dashboard-weather-description'>
                                        {weather?.description}
                                    </div>
                                </div>
                            </div>
                            <div className='air-info'>
                                <div className='pm10'>
                                    <div>
                                        <b>미세먼지</b>
                                    </div>
                                    <div>
                                        <span className='pm10-value'>{airQuality?.pm10}</span>
                                        <span className='pm10-feature'>㎍/m³</span>
                                    </div>
                                    <div className='pm10-grade'>
                                        <Chip label={airQuality?.pm10Grade} color={getAirQualityChipColor(airQuality?.pm10Grade || '')} />
                                    </div>
                                </div>
                                <div className='pm25'>
                                    <div>
                                        <b>초미세먼지</b>
                                    </div>
                                    <div>
                                        <span className='pm25-value'>{airQuality?.pm25}</span>
                                        <span className='pm25-feature'>㎍/m³</span>
                                    </div>
                                    <div className='pm25-grade'>
                                        <Chip label={airQuality?.pm25Grade} color={getAirQualityChipColor(airQuality?.pm25Grade || '')} />
                                    </div>
                                </div>
                            </div>
                            <div className='air-notice'>
                                <Chip className='air-notice-chip' label="미세먼지 정보는 접속하신 시·도 기준으로 표시됩니다" />
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
                                    <OpenInNewIcon />
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
                    <CardContent className='announcement-content'>
                        <List>
                            {announcementItems.map((announcement, index) => (
                                <div
                                    key={index}
                                    className='announcement-item'
                                >
                                    <Box>
                                        <Typography variant='body1' fontWeight="bold" fontSize="14px">
                                            {announcement.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant='body2' color='text.secondary'>
                                        {announcement.date}
                                    </Typography>
                                </div>
                            ))}
                        </List>
                    </CardContent>
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
                    <CardContent className='latest-article-content'>
                        <List>
                            {latestArticles.map((article, index) => (
                                <div
                                    key={index}
                                    className='latest-article-item'
                                >
                                    <div className='latest-article-left'>
                                        <Chip className='latest-article-menu' label={article.menuName} />
                                        <Typography className='latest-article-title'>{article.title}</Typography>
                                        {article.commentCount && (
                                            <Badge 
                                                badgeContent={article.commentCount} 
                                                sx={{ 
                                                    '& .MuiBadge-badge': {
                                                        minWidth: '16px', 
                                                        height: '16px',   
                                                        fontSize: '10px', 
                                                        padding: '0 4px', 
                                                        backgroundColor: '#E2E2E2',
                                                        color: '#000'
                                                    }
                                                }}
                                            >
                                                <TextsmsIcon color='action' sx={{ width: 20, marginLeft: 1 }} />
                                            </Badge>
                                        )}
                                    </div>
                                    <div className='latest-article-right'>
                                        {article.avatar}
                                        <Typography className='latest-article-nickname'>{article.nickName}</Typography>
                                    </div>
                                </div>
                            ))}
                        </List>
                    </CardContent>
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
                    <CardContent className='popular-article-content'>
                        <List>
                            {popularArticles.map((article, index) => (
                                <div
                                    key={index}
                                    className='popular-article-item'
                                >
                                    <div className='popular-article-left'>
                                        <Chip className='popular-article-menu' label={article.menuName} />
                                        <Typography className='popular-article-title'>{article.title}</Typography>
                                        {article.commentCount && (
                                            <Badge 
                                                badgeContent={article.commentCount} 
                                                // color='primary' 
                                                sx={{ 
                                                    '& .MuiBadge-badge': {
                                                        minWidth: '16px', 
                                                        height: '16px',   
                                                        fontSize: '10px', 
                                                        padding: '0 4px', 
                                                        backgroundColor: '#E2E2E2',
                                                        color: '#000'
                                                    }
                                                }}
                                            >
                                                <TextsmsIcon color='action' sx={{ width: 20, marginLeft: 1 }} />
                                            </Badge>
                                        )}
                                    </div>
                                    <div className='popular-article-right'>
                                        {article.avatar}
                                        <Typography className='popular-article-nickname'>{article.nickName}</Typography>
                                    </div>
                                </div>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </div>

            <div className='advertise-banner-section'>
                {advertiseBanners.map((banner) => (
                    <div
                        key={banner.id}
                        className='advertise-banner'
                        style={{
                            width: banner.width,
                            height: banner.height,
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