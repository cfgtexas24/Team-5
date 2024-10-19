import React, { useState } from 'react';

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

  const getColor = (percentage) => {
    if (percentage >= 0 && percentage <= 20) return '#fb4b4b';
    if (percentage >= 21 && percentage <= 50) return '#ffa879';
    if (percentage >= 51 && percentage <= 75) return '#ffc163';
    if (percentage >= 76 && percentage <= 99) return '#feff5c';
    if (percentage === 100) return '#c0ff33';
    return '#f0f0f0'; // Default color
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h2>My Learning</h2>
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

export default MyLearning;