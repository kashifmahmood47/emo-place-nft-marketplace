import React from 'react'
import UserSidebar from './Components/UserSidebar'

const Logout = () => {
  return (
    <div className="container user-dashboard-page">
            <div className="user-sidebar">
                <UserSidebar />

            </div>
            <div className="user-main">
            Session will be logged out when users will click this section
            </div>
        </div>
  )
}

export default Logout
