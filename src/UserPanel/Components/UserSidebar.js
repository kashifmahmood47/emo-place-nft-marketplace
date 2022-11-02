import React from 'react'
import {Link} from 'react-router-dom'
import './UserSidebar.css'
import {FaLaptop,FaShoppingCart, FaUserEdit }from 'react-icons/fa'
import {RiLogoutCircleLine} from 'react-icons/ri'
import {SiBlockchaindotcom} from 'react-icons/si'
import {BsCurrencyBitcoin} from 'react-icons/bs'
const UserSidebar = () => {
  return (
    <div>
      <ul>
                    <Link to="/user-dashboard">
                    <li>
                    <FaLaptop/> Dashboard
                    </li>
                    </Link>
                    <Link to="/user-dashboard/mints">
                    <li >
                       <FaShoppingCart/> Mints
                    </li>
                    </Link>
                    <Link to="/user-dashboard/orders-received">
                    <li >
                       <SiBlockchaindotcom/> Orders Received
                    </li>
                    </Link>
                    <Link to="/user-dashboard/orders-placed">
                    <li >
                       <BsCurrencyBitcoin/> Orders Placed
                    </li>
                    </Link>
                    <Link to="/user-dashboard/profile">
                    <li>
                    <FaUserEdit/> Edit Profile
                    </li>
                    </Link>
                    <Link to="/user-dashboard/logout">
                    <li>
                       <RiLogoutCircleLine/> Logout
                    </li>
                    </Link>
                </ul>
    </div>
  )
}

export default UserSidebar
