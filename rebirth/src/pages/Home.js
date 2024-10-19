import React from 'react'
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className='App'>
        <Navigation />
        <div className='ml-[16.6vw] px-16 py-8'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home;
