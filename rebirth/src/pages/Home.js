import React from 'react'
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className='App'>
        <Navigation />
        <h1 className='text-2xl text-red-700'></h1>
        <Outlet />
    </div>
  )
}

export default Home;
