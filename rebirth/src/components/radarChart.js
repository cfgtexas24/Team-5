import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ skillsData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: skillsData.map(skill => skill.name), // Skill names as labels
        datasets: [{
          label: 'Soft Skills Ranking',
          data: skillsData.map(skill => skill.rank), // Ranks for each skill
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0, // Minimum value for skill ranking
            suggestedMax: 10 // Maximum value for skill ranking
          }
        }
      }
    });

    return () => {
      chart.destroy(); // Cleanup on unmount
    };
  }, [skillsData]);

  return (
    <canvas ref={chartRef}></canvas>
  );
};

export default RadarChart;
