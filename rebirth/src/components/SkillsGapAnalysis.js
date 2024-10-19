import React from 'react';
import '../styles/SkillsGapAnalysis.css';

const SkillsGapAnalysis = ({ user, job }) => {
  const missingSkills = job.requiredSkills
    ? job.requiredSkills.filter(skill => !user.skills.includes(skill))
    : [];

  return (
    <div className="skills-gap-analysis">
      <h3>Skills Gap Analysis</h3>
      <div className="gap-chart">
        <ul>
          {missingSkills.length > 0 ? (
            missingSkills.map((skill, index) => (
              <li key={index} className="missing-skill">
                {skill}
              </li>
            ))
          ) : (
            <p>You have all the required skills for this job.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SkillsGapAnalysis;
