import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobResults from '../components/JobResults';
import JobDetails from '../components/JobDetails';
import '../styles/JobBoard.css';

// Main JobBoard component that combines SearchBar, JobResults, and JobDetails
const JobBoard = () => {
  // Sample job data (could later be fetched from an API)
  const jobsData = [
    { title: 'Global Quantitative Analyst', company: 'JP Morgan', location: 'Paris, FR', description: 'Detailed job description goes here...' },
    { title: 'Software Engineering Intern', company: 'Google', location: 'Mountain View, CA', description: 'Detailed job description goes here...' },
    { title: 'Frontend Developer', company: 'Meta', location: 'San Francisco, CA', description: 'Detailed job description goes here...' },
  ];

  // State to track the currently selected job
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="job-board">
      {/* SearchBar component for filtering jobs */}
      <SearchBar />

      <div className="job-results-and-details">
        {/* JobResults component to display the list of jobs */}
        <JobResults jobs={jobsData} onSelectJob={setSelectedJob} />

        {/* JobDetails component to display details of the selected job */}
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
};

export default JobBoard;



