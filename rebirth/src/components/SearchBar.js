import React, { useState } from 'react';

// SearchBar component for filtering job results
function SearchBar({ titleSearchTerm, locationSearchTerm, salarySearchVal }) {
  // State to store the input values for position title, location, salary, and job type
  const [positionTitle, setPositionTitle] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState('');

  // Title search functionality
  const handleTitleSearch = (e) => {
    const searchTerm = e.target.value;
    setPositionTitle(searchTerm);
    titleSearchTerm(searchTerm);
  };

  // Location search functionality
  const handleLocationSearch = (e) => {
    const searchTerm = e.target.value;
    setLocation(searchTerm);
    locationSearchTerm(searchTerm);
  }

  // Salary search functionality
  const handleSalarySearch = (e) => {
    const searchTerm = e.target.value;
    setSalary(searchTerm);
    salarySearchVal(searchTerm);
  }

  return (
    <div className="search-bar flex flex-wrap">
      {/* Input for job title */}
      <input
      className="mt-2"
        type="text"
        placeholder="Enter Position Title"
        value={positionTitle}
        onChange={handleTitleSearch}
      />

      {/* Input for location */}
      <input
      className="mt-2"
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={handleLocationSearch}
      />

      {/* Dropdown for salary range */}
      <select className="mt-2" value={salary} onChange={handleSalarySearch}>
        <option value="">Select Salary range</option>
        <option value="20k-40k">20k-40k</option>
        <option value="30k-60k">30k-60k</option>
        <option value="60k-80k">60k-80k</option>
        <option value="80k+">80k+</option>
      </select>

      {/* Dropdown for job type (full-time/part-time) */}
      <select className="mt-2" value={jobType} onChange={(e) => setJobType(e.target.value)}>
        <option value="">Select Job Type</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
      </select>

      {/* Button to trigger the search (functionality to be implemented later) */}
      <button className="mt-2" >Search</button>
    </div>
  );
};

export default SearchBar;




