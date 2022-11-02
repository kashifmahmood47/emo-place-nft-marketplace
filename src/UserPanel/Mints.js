import React from 'react'
import UserSidebar from './Components/UserSidebar'

const Mints = () => {
  return (
    <div className="container user-dashboard-page">
            <div className="user-sidebar">
                <UserSidebar />

            </div>
            <div className="user-main">
            NFTs uploaded will show here
            </div>
        </div>
  )
}

export default Mints
