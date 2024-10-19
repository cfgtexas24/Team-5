import React from 'react';

// EmployerJobDetails component to display job information with edit option for employers
const EmployerJobDetails = ({ job }) => {
  // If no job is selected, display a placeholder message
  if (!job) {
    return <div className="job-details">Select a job to view details</div>;
  }

  return (
    <div className="job-details">
      {/* Display the job title and edit button */}
      <div className="flex justify-between items-center">
        <h3>{job.title}</h3>

        {/* Edit Posting button for employers */}
        <button className="bg-transparent text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white py-2 px-4 rounded">
          Edit Posting
        </button>
      </div>

      {/* Display the company name */}
      <p>Posted by: {job.company}</p>

      {/* Display the job location */}
      <p>Location: {job.location}</p>

      {/* Display the job description */}
      <div className="job-description">
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default EmployerJobDetails;
