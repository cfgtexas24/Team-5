import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import './styles/style.css';
import './styles/utils.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import JobBoard from './pages/JobBoard';
import MyLearning from './pages/MyLearning';
import Profile from './pages/Profile';
import DiscussionBoard from './pages/DiscussionBoard';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/job-board' element={<JobBoard />} />
                    <Route path='/mylearning' element={<MyLearning />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/discussion-board' element={<DiscussionBoard />} />
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
