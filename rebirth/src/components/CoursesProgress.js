import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Course Data
const courseData = [
  { name: 'Digital Marketing & E-commerce', completion: 88 },
  { name: 'Project Management', completion: 100 },
  { name: 'UX Design', completion: 100 },
  { name: 'Cybersecurity', completion: 70 },
  { name: 'Digital Marketing & E-Commerce', completion: 50 },
  { name: 'IT Automation with Python', completion: 100 },
  { name: 'Advanced Data Analytics', completion: 90 },
  { name: 'Business Intelligence', completion: 19 },
];

// Chart component for each course
const CourseProgressChart = ({ course }) => {
  const data = {
    labels: [`${course.completion}% Completed`, `${100 - course.completion}% Remaining`],
    datasets: [
      {
        label: course.name,
        data: [course.completion, 100 - course.completion],
        backgroundColor: ['#4CAF50', '#E0E0E0'], // Green for completed, grey for remaining
        hoverBackgroundColor: ['#45A049', '#B0B0B0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '70%', // Controls the size of the inner hole
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}`;
          },
        },
      },
    },
  };

  return (
    <div className="course-chart">
      <Doughnut data={data} options={options} />
      <p className="text-center mt-2">{course.name}</p>
    </div>
  );
};

// Main component to render all courses
const CoursesProgress = () => {
  return (
    <div className="courses-progress">
      <h2 className="text-2xl font-bold mb-4">Courses Progress</h2>
      <div className="grid grid-cols-2 gap-8">
        {courseData.map((course, index) => (
          <div key={index}>
            <CourseProgressChart course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesProgress;
