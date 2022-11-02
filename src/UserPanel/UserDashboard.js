import React from 'react'
import './UserDashboard.css'

import UserSidebar from './Components/UserSidebar'

const UserDashboard = () => {
    return (
        <div className="container user-dashboard-page">
            <div className=" user-sidebar">
                <UserSidebar />

            </div>
            <div className="user-main">
            
Dashboard and analytics will show here
            </div>
        </div>
    )
}

export default UserDashboard
