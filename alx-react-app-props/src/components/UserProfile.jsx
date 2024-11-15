// import React from "react";
// const UserProfile = (props) => {
//     return (
//       <div>
//         <h2>{props.name}</h2>
//         <p>Age: {props.age}</p>
//         <p>Bio: {props.bio}</p>
//       </div>
//     );
//   };
//   export default UserProfile
// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>City: {userData.city}</p>
    </div>
  );
}

export default UserProfile;
