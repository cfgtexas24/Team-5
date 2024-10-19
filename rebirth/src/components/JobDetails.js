import React from 'react';

// JobDetails component to display detailed information about a selected job
const JobDetails = ({ job }) => {
  // If no job is selected, display a placeholder message
  if (!job) {
    return <div className="job-details">Select a job to view details</div>;
  }

  return (
    <div className="job-details">
      {/* Display the job title */}
      <h3>{job.title}</h3>

      {/* Display the company name */}
      <p>Posted by: {job.company}</p>

      {/* Display the job location */}
      <p>Location: {job.location}</p>

      {/* Display the job type */}
      <p>Type: {job.job_type}</p>

      {/* Display the job description */}
      <div className="job-description">
        <p>{job.description}</p>
      </div>

      {/* Apply button for future functionality */}
      <button>Apply</button>
    </div>
  );
};

export default JobDetails;


