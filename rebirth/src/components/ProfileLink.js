import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from "../assets/account_circle.png";
import notificationIcon from '../assets/notifications.png';

const ProfileLink = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is '/user/profile'
  if (location.pathname === '/user/profile') {
    return null; // Do not render anything if the route is '/user/profile'
  }

  return (
    <div className='absolute top-4 right-4 flex gap-4 items-center w-24'>
        <div>
            <img src={notificationIcon} alt="notification-icon" />
        </div>
        <Link to='/user/profile'>
            <img src={profileIcon} alt="profile-icon" />
        </Link>
    </div>
  );
};

export default ProfileLink;
