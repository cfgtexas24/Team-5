
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import JobResults from '../../components/JobResults';
import EmployerJobDetails from '../../components/EmployerJobDetails'; // Use EmployerJobDetails for employers
import '../../styles/JobBoard.css';

// Main JobBoard component for employers that combines SearchBar, JobResults, and EmployerJobDetails
const EmployerJobBoard = () => {
  // Sample job data (could later be fetched from an API)
  const jobsData = [
    { title: 'Global Quantitative Analyst', company: 'JP Morgan', location: 'Paris, FR', description: 'Detailed job description goes here...' },
    { title: 'Software Engineering Intern', company: 'Google', location: 'Mountain View, CA', description: 'Detailed job description goes here...' },
    { title: 'Frontend Developer', company: 'Meta', location: 'San Francisco, CA', description: 'Detailed job description goes here...' },
  ];

  // State to track the currently selected job
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="job-board mt-10">
      {/* SearchBar component for filtering jobs */}
      <SearchBar />

      <div className="job-results-and-details">
        {/* JobResults component to display the list of jobs */}
        <JobResults jobs={jobsData} onSelectJob={setSelectedJob} />

        {/* EmployerJobDetails component to display details and edit option for the selected job */}
        <EmployerJobDetails job={selectedJob} />
      </div>
    </div>
  );
};

export default EmployerJobBoard;

