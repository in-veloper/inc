import React from 'react'
import './style/menuCard.css'
import { useNavigate } from 'react-router-dom'

interface CardProps {
    title: string
    description: string
    path: string
}

const MenuCard: React.FC<CardProps> = ({ title, description, path }) => {
    const navigate = useNavigate()

    const handleMenuClick = (path: string) => {
        navigate(path)
    }

    return (
        <div className="menu-card" onClick={() => handleMenuClick(path)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default MenuCard