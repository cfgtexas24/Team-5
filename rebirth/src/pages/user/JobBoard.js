import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import JobResults from '../../components/JobResults';
import JobDetails from '../../components/JobDetails';
import '../../styles/JobBoard.css';

// Main JobBoard component that combines SearchBar, JobResults, and JobDetails
const JobBoard = () => {
  // Sample job data (could later be fetched from an API)
  const jobsData = [
    { title: 'Global Quantitative Analyst', company: 'JP Morgan', location: 'Paris, FR', description: 'Detailed job description goes here...' },
    { title: 'Software Engineering Intern', company: 'Google', location: 'Mountain View, CA', description: 'Detailed job description goes here...' },
    { title: 'Frontend Developer', company: 'Meta', location: 'San Francisco, CA', description: 'Detailed job description goes here...' },
  ];

  // return list of jobs whose title includes title parameter
  // function filterJobsByTitle(jobs, title) {
  //   console.log('filter')
  //   return jobs.filter(job => job.title.toLowerCase().includes(title.toLowerCase()));
  // }

  // State to track the currently selected job
  const [selectedJob, setSelectedJob] = useState(null);
  const [titleSearchTerm, setTitleSearchTerm] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  // This function will be passed to SearchBar to receive title search term
  const handleTitleSearchTerm = (term) => {
    setTitleSearchTerm(term); // Update title search term
    
    // Filter jobs and update state
    const filtered = jobsData.filter(job => 
      job.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredJobs(filtered); // Trigger re-render with updated filtered jobs
  };

  // This function will be passed to SearchBar to receive location search term
  const handleLocationSearchTerm = (term) => {
    setLocationSearchTerm(term); // Update loc search term
    
    // Filter jobs and update state
    const filtered = jobsData.filter(job => 
      job.location.toLowerCase().includes(term.toLowerCase())
    );
    console.log('filter')
    setFilteredJobs(filtered); // Trigger re-render with updated filtered jobs
  };

  return (
    <div className="job-board mt-10">
      {/* SearchBar component for filtering jobs */}
      <SearchBar titleSearchTerm={handleTitleSearchTerm} locationSearchTerm={handleLocationSearchTerm} />

      <div className="job-results-and-details">
        {/* JobResults component to display the list of jobs */}
        <JobResults jobs={filteredJobs} onSelectJob={setSelectedJob} />

        {/* JobDetails component to display details of the selected job */}
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
};

export default JobBoard;

