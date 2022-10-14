import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  responsive: true,
  maintainAspectRatio: false,
  datasets: [
    {
      data: [30,70],
      backgroundColor: ["#FF5B51","#EDEFF5"],
      borderColor: ["#FF5B51", "#EDEFF5"],
      hoverOffset: 5
    }
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
