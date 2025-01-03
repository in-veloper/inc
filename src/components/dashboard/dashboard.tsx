import React from 'react'
import MenuCard from '../common/MenuCard.tsx'
import { menuItems } from '../../consts/MenuItems.ts'
import './style/dashboard.css'

const Dashboard: React.FC = () => {
    
    return (
        <div className="dashboard-container">
            <div className="dashboard">
                {menuItems.map((item) => (
                    <MenuCard 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard