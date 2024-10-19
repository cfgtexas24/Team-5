import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers the necessary components

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

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">My Learning</h2>
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
