import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  responsive: true,
  maintainAspectRatio: false,
  datasets: [
    {
      data: [30, 60, 50],
      backgroundColor: ["#27C052", "#DF6666", "#ABD84B"],
      borderColor: ["#27C052", "#DF6666", "#ABD84B"],
      // hoverOffset: 2
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: true
  }
};

export function PieChart() {
  return (
    <>
      <div>
        <Pie data={data} options={options} />
      </div>
    </>
  );
}
