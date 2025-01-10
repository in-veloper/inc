import React from 'react'
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style/dashboard.css'

const carouselItems = [
    { id: 1, image: carouselTest1, title: "Item 1", description: "This is carousel item 1"},
    { id: 2, image: carouselTest2, title: "Item 2", description: "This is carousel item 2"},
    { id: 3, image: carouselTest3, title: "Item 3", description: "This is carousel item 3"}
]


const Dashboard: React.FC = () => {

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
            <div style={{ display: 'flex'}}>
                <div className='carousel-section'>
                    <Slider {...sliderSettings}>
                        {carouselItems.map((item) => (
                            <div key={item.id} className='carousel-item' >
                                <img src={item.image} alt={item.title} className='carousel-image' />
                            </div>
                        ))}
                    </Slider>

                </div>
                <div style={{ marginLeft: 50 }}>
                    <Card sx={{ width: '300px'}}>
                        <CardHeader 
                            avatar={
                                // <Avatar sx={{ bgcolor: 'lightgray' }}>
                                    <WiDust style={{ fontSize: 35 }} />
                                // </Avatar>
                            }
                            action={
                                <IconButton aria-label='settings'>
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={<b>미세먼지 정보 알림</b>}
                        />
                    </Card>
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