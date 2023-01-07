// import React from 'react'
// import UserSidebar from './Components/UserSidebar'

// const Logout = () => {
//   return (
//     <div className="container user-dashboard-page">
//             <div className="user-sidebar">
//                 <UserSidebar />

//             </div>
//             <div className="user-main">
//             Session will be logged out when users will click this section
//             </div>
//         </div>
//   )
// }

// export default Logout
import React from 'react'
import UserSidebar from './Components/UserSidebar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Logout.css'
const Logout = () => {
  return (
    <div className="container user-dashboard-page">
      <div className="user-sidebar">
        <UserSidebar />
      </div>
      <div className="container">
        <Card>
          <Card.Body className="bt">
            <h3 className="text mt-5 mb-5">Do you want to logout ?</h3>
            <div className="text-center">
              <Button variant="info" className="mb-5">
                {' '}
                Logout
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Logout
