import React from 'react'
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router';
import ProfileLink from '../components/ProfileLink';
import UsersComponent from '../components/test';

const Home = () => {
    return (
        <div className='App'>
            <Navigation />
            <div className='ml-[16.6vw] px-16 py-8'>
                <UsersComponent />
                <Outlet />
            </div>

            <ProfileLink />
        </div>
    )
}

export default Home;
