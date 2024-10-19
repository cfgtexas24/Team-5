import React from 'react';

// JobResults component to display a list of job results
const JobResults = ({ jobs, onSelectJob }) => {
  return (
    <div className="job-results">
      {/* Check if there are jobs to display, otherwise show a message */}
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div
            key={index}
            className="job-item"
            onClick={() => onSelectJob(job)} // When clicked, select the job to view details
          >
            {/* Display the job title */}
            <h4>{job.title}</h4>

            {/* Display the company name and location */}
            <p>{job.company} - {job.location}</p>
          </div>
        ))
      ) : (
        <p>No jobs found.</p> // Display this message if no jobs are available
      )}
    </div>
  );
};

export default JobResults;


