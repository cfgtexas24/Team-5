import React from 'react';
import '../styles/RecommendedCourses.css';  // Create and link a new CSS file

const RecommendedCourses = ({ missingSkills }) => {
  console.log('Missing skills in RecommendedCourses:', missingSkills);

  // Dummy course data
  const allCourses = [
    { title: 'Advanced React', skillsCovered: ['React', 'Redux'] },
    { title: 'Node.js Fundamentals', skillsCovered: ['Node.js'] },
    { title: 'JavaScript Basics', skillsCovered: ['JavaScript'] },
    { title: 'CSS for Beginners', skillsCovered: ['CSS'] },
  ];

  // Recommend courses based on missing skills
  const recommendedCourses = allCourses.filter(course =>
    course.skillsCovered.some(skill => missingSkills.includes(skill))
  );

  return (
    <div className="recommended-courses">
      <h3>Recommended Courses</h3>
      <div className="courses-grid">
        {recommendedCourses.length > 0 ? (
          recommendedCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h4>{course.title}</h4>
              <p>Skills Covered: {course.skillsCovered.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No recommended courses available for your missing skills.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedCourses;
