import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from "../assets/prof_photo.jpg";
import notificationIcon from '../assets/notifications.png';

const ProfileLink = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is '/user/profile'
  if (location.pathname === '/user/profile') {
    return null; // Do not render anything if the route is '/user/profile'
  }

  return (
    <div className='absolute top-3 right-4 flex gap-4 items-center w-30'>
        <div>
            <img src={notificationIcon} alt="notification-icon" className="w-10"/>
      
        </div>
        
        <Link to='/user/profile'>
            <img src={profileIcon} alt="profile-icon" className="w-14 h-14 ml-4 rounded-full object-cover"/>
        </Link>
    </div>
  );
};

export default ProfileLink;
