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
                    <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                        <Link to='/user/job-search'>
                            <p className='text-2xl'>Job Board</p>
                        </Link>
                    </li>
                    <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                        <Link to='/user/mylearning'>
                            <p className='text-2xl'>My Courses</p>
                        </Link>
                    </li>
                    <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                        <Link to='/user/myapplications'>
                            <p className='text-2xl'>My Application</p>
                        </Link>
                    </li>
                    <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                        <Link to='/user/settings'>
                            <p className='text-2xl'>Settings</p>
                        </Link>
                    </li>
                </ul>
            )}

            {isEmployerRoute && (
                <ul className='flex flex-col gap-4 text-center'>
                    <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                        <Link to='/employer/job-postings'>
                            <p className='text-2xl'>Job Posting</p>
                        </Link>
                    </li>
                    <li className='hover:bg-[var(--clr-light-yellow)] hover:cursor-pointer'>
                        <Link to='/employer/settings'>
                            <p className='text-2xl'>Settings</p>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navigation;
