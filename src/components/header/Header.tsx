import React from 'react'
import './style/header.css'

const Header: React.FC = () => {
    return (
        <div className="app-header">
            <img 
                src="/inc_icon.png"
                className="logo_icon" 
            />
            <b>Industrial Nurse Community</b>
        </div>
    )
}

export default Header