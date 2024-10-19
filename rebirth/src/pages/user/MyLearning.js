import React, { useState } from 'react';
<<<<<<< Updated upstream
=======
import { useLocation } from 'react-router-dom';
import SkillsGapAnalysis from '../../components/SkillsGapAnalysis';
import RecommendedCourses from '../../components/RecommendedCourses';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers necessary components

// Generate chart data for the completion percentages
const generateChartData = (percentage) => ({
  labels: ['Completed', 'Remaining'],
  datasets: [
    {
      data: [percentage, 100 - percentage],
      backgroundColor: ['#4CAF50', '#E0E0E0'],
      hoverBackgroundColor: ['#45A049', '#B0B0B0'],
      borderWidth: 1,
    },
  ],
});
>>>>>>> Stashed changes

const MyLearning = () => {
  const location = useLocation();
  const job = location.state?.job || {};

  console.log('Job data in MyLearning:', job);

  // Dummy user data
  const user = {
    username: 'employee123',
    skills: ['JavaScript', 'HTML', 'CSS'],
  };

  // Get the missing skills from the job's required skills and the user's current skills
  const missingSkills = job.requiredSkills
    ? job.requiredSkills.filter(skill => !user.skills.includes(skill))
    : [];

  console.log('Missing skills:', missingSkills);

  const [percentages] = useState({
    digitalMarketing: 88,
    projectManagement: 100,
    uxDesign: 100,
    cybersecurity: 70,
    digitalMarketingEcommerce: 50,
    itAutomation: 100,
    advancedDataAnalytics: 90,
    businessIntelligence: 19,
  });

  const getColor = (percentage) => {
    if (percentage >= 0 && percentage <= 20) return '#fb4b4b';
    if (percentage >= 21 && percentage <= 50) return '#ffa879';
    if (percentage >= 51 && percentage <= 75) return '#ffc163';
    if (percentage >= 76 && percentage <= 99) return '#feff5c';
    if (percentage === 100) return '#c0ff33';
    return '#f0f0f0'; // Default color
  };

  return (
<<<<<<< Updated upstream
    <div style={{ marginTop: '100px' }}>
      <h2>My Learning</h2>
=======
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">My Learning</h2>

      {/* Render Skills Gap Analysis and Recommended Courses if job is selected */}
      {job.title && (
        <div className="analysis-section mb-8">
          <SkillsGapAnalysis user={user} job={job} />
          <RecommendedCourses missingSkills={missingSkills} />
        </div>
      )}

      {/* Display Learning Progress */}
>>>>>>> Stashed changes
      <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <ul className="flex flex-col gap-4">
          <li>
            <div style={{ background: getColor(percentages.digitalMarketing), borderRadius: "8px", padding: "10px" }}>
              <strong>Digital Marketing & E-commerce</strong>
              <p style={{ color: "black" }}>{percentages.digitalMarketing}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.projectManagement), borderRadius: "8px", padding: "10px" }}>
              <strong>Project Management</strong>
              <p style={{ color: "black" }}>{percentages.projectManagement}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.uxDesign), borderRadius: "8px", padding: "10px" }}>
              <strong>UX Design</strong>
              <p style={{ color: "black" }}>{percentages.uxDesign}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.cybersecurity), borderRadius: "8px", padding: "10px" }}>
              <strong>Cybersecurity</strong>
              <p style={{ color: "black" }}>{percentages.cybersecurity}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.digitalMarketingEcommerce), borderRadius: "8px", padding: "10px" }}>
              <strong>Digital Marketing & E-Commerce</strong>
              <p style={{ color: "black" }}>{percentages.digitalMarketingEcommerce}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.itAutomation), borderRadius: "8px", padding: "10px" }}>
              <strong>IT Automation with Python</strong>
              <p style={{ color: "black" }}>{percentages.itAutomation}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.advancedDataAnalytics), borderRadius: "8px", padding: "10px" }}>
              <strong>Advanced Data Analytics</strong>
              <p style={{ color: "black" }}>{percentages.advancedDataAnalytics}% completed</p>
            </div>
          </li>
          <li>
            <div style={{ background: getColor(percentages.businessIntelligence), borderRadius: "8px", padding: "10px" }}>
              <strong>Business Intelligence</strong>
              <p style={{ color: "black" }}>{percentages.businessIntelligence}% completed</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
export default MyLearning;
=======
export default MyLearning;

>>>>>>> Stashed changes
