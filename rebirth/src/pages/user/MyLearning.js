import React, { useState } from 'react';
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

  const courses = [
    { name: 'Digital Marketing & E-commerce', completion: percentages.digitalMarketing },
    { name: 'Project Management', completion: percentages.projectManagement },
    { name: 'UX Design', completion: percentages.uxDesign },
    { name: 'Cybersecurity', completion: percentages.cybersecurity },
    { name: 'Digital Marketing & E-Commerce', completion: percentages.digitalMarketingEcommerce },
    { name: 'IT Automation with Python', completion: percentages.itAutomation },
    { name: 'Advanced Data Analytics', completion: percentages.advancedDataAnalytics },
    { name: 'Business Intelligence', completion: percentages.businessIntelligence },
  ];

  const getColor = (percentage) => {
    if (percentage >= 0 && percentage <= 20) return '#fb4b4b';
    if (percentage >= 21 && percentage <= 50) return '#ffa879';
    if (percentage >= 51 && percentage <= 75) return '#ffc163';
    if (percentage >= 76 && percentage <= 99) return '#feff5c';
    if (percentage === 100) return '#c0ff33';
    return '#f0f0f0';
  };

  // Dummy learning streak data (in days)
  const learningStreak = 7; // Replace with dynamic value later

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        {/* Streak Container */}
        <div className="flex items-center bg-white shadow-lg rounded-lg p-4 mb-6">
          <span style={{ fontSize: '2rem', color: '#FF4500' }}>🔥</span>
          <div className="ml-3">
            <h2 className="text-xl font-bold">My Learning</h2>
            <p className="text-gray-600">{learningStreak} day learning streak</p>
          </div>
        </div>
      </div>

      {/* Render Skills Gap Analysis and Recommended Courses if job is selected */}
      {job.title && (
        <div className="analysis-section mb-8">
          <SkillsGapAnalysis user={user} job={job} />
          <RecommendedCourses missingSkills={missingSkills} />
        </div>
      )}

      {/* Display Learning Progress */}
      <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <ul className="flex flex-col gap-4">
          {courses.map((course, index) => (
            <li key={index} className="flex items-center gap-4">
              <div
                style={{
                  background: getColor(course.completion),
                  borderRadius: '8px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{ width: '80px', height: '80px' }}>
                  <Doughnut
                    data={generateChartData(course.completion)}
                    options={{
                      cutout: '70%',
                      plugins: { legend: { display: false } },
                    }}
                  />
                </div>

                <div className="flex-grow px-4">
                  <strong>{course.name}</strong>
                  <p style={{ color: 'black' }}>{course.completion}% completed</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyLearning;


