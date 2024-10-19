import React from 'react';
import { Link } from 'react-router-dom';

const JobDetails = () => {
  // Static job data
  const job = {
    title: 'Global Quantitative Analyst',
    company: 'JP Morgan',
    location: 'Paris, FR',
    job_type: 'full-time',
    description: 'This is a detailed job description for a Global Quantitative Analyst at JP Morgan.',
    requiredSkills: ['JavaScript', 'React', 'Redux']
  };

  // Log the job data before passing it through Link
  console.log('Job data being passed:', { ...job, requiredSkills: job.requiredSkills });

  return (
    <div className="job-details">
      <h3>{job.title}</h3>
      <p>Posted by: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Type: {job.job_type}</p>
      <div className="job-description">
        <p>{job.description}</p>
      </div>
      <div className="button-group">
        <button className="btn">Apply</button>

        {/* Pass the job data directly using the React Router v6+ syntax */}
        <Link 
          to="/user/mylearning" 
          state={{ job: { ...job, requiredSkills: job.requiredSkills } }}  // Directly pass state
        >
          <button className="btn">See How You Qualify</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;




