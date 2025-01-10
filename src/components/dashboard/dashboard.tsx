import React from 'react'
// import MenuCard from '../common/MenuCard'
// import { menuItems } from '../../consts/MenuItems'
import Slider from "react-slick"
import carouselTest1 from '../../asset/img/dashboard/carousel_test_1.jpg'
import carouselTest2 from '../../asset/img/dashboard/carousel_test_2.jpg'
import carouselTest3 from '../../asset/img/dashboard/carousel_test_3.jpg'
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
        // appendDots: (dots: React.ReactNode) => (
        //     <div
        //         style={{
        //             position: "absolute",
        //             bottom: "50px", // dots를 이미지 내부에 위치
        //             width: "100%",
        //             textAlign: "center",
        //         }}
        //     >
        //         <ul style={{ margin: "0", padding: "0" }}> {dots} </ul>
        //     </div>
        // )
    }
    
    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <div className='carousel-section'>
                    <Slider {...sliderSettings}>
                        {carouselItems.map((item) => (
                            <div key={item.id} className='carousel-item' >
                                <img src={item.image} alt={item.title} className='carousel-image' />
                            </div>
                        ))}
                    </Slider>

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
        </div>
    )
}

export default Dashboard