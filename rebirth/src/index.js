import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './styles/index.css';
import './styles/style.css';
import './styles/utils.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import JobBoard from './pages/user/JobBoard';
import MyLearning from './pages/user/MyLearning';
import Profile from './pages/user/Profile';
import DiscussionBoard from './pages/user/DiscussionBoard';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import MyApplication from './pages/user/MyApplication';
import Settings from './pages/user/Settings';
import JobPostings from './pages/employer/JobPostings';
import EmployerSettings from './pages/employer/EmployerSettings';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<SignUp />} />
                <Route path='' element={<Home />}>
                    <Route path='/user'>
                        <Route index element={<Navigate to='/user/job-search' />} />
                        <Route path='/user/job-search' element={<JobBoard />} />
                        <Route path='/user/mylearning' element={<MyLearning />} />
                        <Route path='/user/profile' element={<Profile />} />
                        <Route path='/user/myapplications' element={<MyApplication />}  />
                        <Route path='/user/discussion-board' element={<DiscussionBoard />} />
                        <Route path='/user/settings' element={<Settings />} />
                    </Route>
                    <Route path='/employer'>
                        <Route index element={<Navigate to='/employer/job-postings' />} />
                        <Route path='/employer/job-postings' element={<JobPostings />} />
                        <Route path='/employer/settings' element={<EmployerSettings />} />
                    </Route>
                    <Route path='/admin'>
                        <Route index element={<Dashboard />} />
                    </Route>

                    <Route path='*' element={ <Home /> }>
                        <Route index path='*' element={ <NoPage /> } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
