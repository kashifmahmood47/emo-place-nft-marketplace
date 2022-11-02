import React from 'react'
import UserSidebar from './Components/UserSidebar'
const Profile = () => {
  return (
    <div>
       <div className="container user-dashboard-page">
            <div className=" user-sidebar">
                <UserSidebar />

            </div>
            <div className="user-main">
            
Edit profile will show here
            </div>
        </div>
    </div>
  )
}

export default Profile
