// import React from 'react'
// import UserSidebar from './Components/UserSidebar'
// const Profile = () => {
//   return (
//     <div>
//        <div className="container user-dashboard-page">
//             <div className=" user-sidebar">
//                 <UserSidebar />

//             </div>
//             <div className="user-main">
            
// Edit profile will show here
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Profile
import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import UserSidebar from './Components/UserSidebar'

const Profile = () => {
  return (
    <div>
      <div className="container user-dashboard-page">
        <div className=" user-sidebar">
          <UserSidebar />
        </div>
        <div className="user-main  container ms-3">
        <div className="heading">
            <h3>
              Your Profile
            </h3>
            <p>You must complete your profile 100% before minting or collecting NFTs</p>
          </div>
          <div className="profile-container">
            <Form>
              <Form.Group>
                <Form.Label>Change Image</Form.Label>
                <Form.Control type="file" placeholder="Choose File" autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="@username" autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email adress"
                  autoFocus
                />
              </Form.Group>
              <br/>
              <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Save Changes
      </Button>
      {/* <Button variant="secondary" size="lg">
        Block level button
      </Button> */}
    </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
