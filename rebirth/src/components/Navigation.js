import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navigation = () => {
    const location = useLocation(); // Get the current route

    // Check if the current path is part of '/user/' or '/employer/'
    const isUserRoute = location.pathname.startsWith('/user/');
    const isEmployerRoute = location.pathname.startsWith('/employer/');

    return (
        <div className='absolute bg-[#F2EEEE] flex flex-col gap-16 w-1/6 h-screen'>
            <Link to='/'>
                <img className='p-6 mx-auto' src={logo} alt="rebirth logo" />
            </Link>

            {isUserRoute && (
                <ul className='flex flex-col gap-4 text-center'>
                    <Link to='/user/job-search'>
                        <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                            <p className='text-2xl'>Job Board</p>
                        </li>
                    </Link>
                    <Link to='/user/mylearning'>
                        <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                            <p className='text-2xl'>My Courses</p>
                        </li>
                    </Link>
                    <Link to='/user/myapplications'>
                        <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                            <p className='text-2xl'>My Application</p>
                        </li>
                    </Link>
                    <Link to='/user/settings'>
                        <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                            <p className='text-2xl'>Settings</p>
                        </li>
                    </Link>
                </ul>
            )}

            {isEmployerRoute && (
                <ul className='flex flex-col gap-4 text-center'>
                    <Link to='/employer/job-postings'>
                        <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                            <p className='text-2xl'>Job Posting</p>
                        </li>
                    </Link>
                    <Link to='/employer/settings'>
                        <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                            <p className='text-2xl'>Settings</p>
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    );
};

export default Navigation;
