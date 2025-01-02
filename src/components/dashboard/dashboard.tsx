import React from 'react'
import MenuCard from '../common/MenuCard.tsx'
import './style/dashboard.css'

const Dashboard: React.FC = () => {
    const menuItems = [
        { id: 1, title: 'Menu 1', description: 'Description for Menu 1' },
        { id: 2, title: 'Menu 2', description: 'Description for Menu 2' },
        { id: 3, title: 'Menu 3', description: 'Description for Menu 3' },
        { id: 4, title: 'Menu 4', description: 'Description for Menu 4' },
        { id: 5, title: 'Menu 5', description: 'Description for Menu 5' },
        { id: 6, title: 'Menu 6', description: 'Description for Menu 6' },
        { id: 7, title: 'Menu 7', description: 'Description for Menu 7' },
        { id: 8, title: 'Menu 8', description: 'Description for Menu 8' },
    ]

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