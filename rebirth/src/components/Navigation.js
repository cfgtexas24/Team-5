import React from 'react'
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-[#F2EEEE] flex flex-col gap-16 w-1/6 h-screen'>
            <img className='p-6' src={logo} alt="rebirth logo" />
            <ul className='flex flex-col gap-4 text-center'>
                <li>
                    <Link to='/user/job-search'>
                        <p className='text-2xl'>Job Board</p>
                    </Link>
                </li>
                <li>
                    <Link to='/user/mylearning'>
                        <p className='text-2xl'>My Courses</p>
                    </Link>
                </li>
                <li>
                    <Link to='/user/myapplication'>
                        <p className='text-2xl'>My Application</p>
                    </Link>
                </li>
                <li>
                    <Link to=' '>
                        <p className='text-2xl'>Settings</p>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Navigation;