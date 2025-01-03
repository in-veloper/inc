import React from 'react'
import './style/menuCard.css'

interface CardProps {
    title: string
    description: string
}

const MenuCard: React.FC<CardProps> = ({ title, description }) => {
    const handleMenuClick = (event: any) => {
        console.log(event)
    }

    return (
        <div className="menu-card" onClick={handleMenuClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default MenuCard