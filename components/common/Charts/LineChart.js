import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import annotationPlugin from "chartjs-plugin-annotation";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, annotationPlugin, Title, Tooltip, Legend);
const labels = ["May 10", "May 15", "May 20", "May 25", "May 30", "June 05", "June 10", "June 15"];

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    // padding: 20,
  },
  interaction: {
    intersect: false,
    mode: "nearest",
  },
  //   aspectRatio: 1,
  scales: {
    xAxis: {
      // // beginAtZero: true,
      // offset: true,
      grid: {
        // display:false,
        lineWidth: 1,
        borderWidth: 1,
        tickWidth: 0,
        // color: "red",
      },
      // ticks: {
      //   padding: 20,
      // },
    },
    yAxis: {
      grid: {
        borderColor: "#EDEFF5",
        // borderDash: [7, 3],
      },
      beginAtZero: true,
      lineWidth: 1,
      max: 100,
      ticks: {
        stepSize: 20,
        height: 100,
        callback: (context) => {
          return `${context}%`;
        },
      },
    },
  },
  plugins: {
    annotation: {
      annotations: {
        line1: {
          type: "line",
          scaleID: "xAxis",
          // value: labels[new Date().getMonth() - 1],
          value: labels[labels.length - 2],
          label: {
            content: "Now",
            display: true,
            position: "end",
            backgroundColor: "#A8B1CE",
            borderRadius: "44",
            yAdjust: 5,
          },
          borderColor: "#A8B1CE",
          backgroundColor: "red",
          borderDash: [5, 5],
          borderWidth: 2,
        },
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
      usePointStyle: true,
      displayColors: false,
      yAlign: "bottom",
      xAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      callbacks: {
        label: function (context) {
          //    console.log(context);
          return `${context.raw}% Perfect`;
        },
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 49, 80, 81, 56, 55, 60],
      tension: 0.5,
      pointRadius: 4,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#FCC966",
      borderWidth: 3,
    },
    {
      label: "Dataset 2",
      data: [35, 70, 60, 31, 36, 40, 60],
      tension: 0.5,
      pointRadius: 4,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#6690FC",
      borderWidth: 3,
    },
    {
      label: "Dataset 3",
      data: [21, 4, 11, 22, 33, 11, 44],
      tension: 0.5,
      pointRadius: 4,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#796DFD",
      borderWidth: 3,
    },
    {
      label: "Dataset 4",
      data: [71, 51, 41, 12, 91, 41, 81],
      tension: 0.5,
      pointRadius: 0,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#FFE9BF",
      borderWidth: 3,
      borderDash: [5, 5],
    },
    {
      label: "Dataset 5",
      data: [5, 7, 6, 30, 3, 4, 64],
      tension: 0.5,
      pointRadius: 0,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#B8CCFF",
      borderWidth: 3,
      borderDash: [5, 5],
    },
    {
      label: "Dataset 6",
      data: [6, 20, 17, 8, 6, 4, 6],
      tension: 0.5,
      pointRadius: 0,
      hoverBorderWidth: 2,
      pointBackgroundColor: "white",
      borderColor: "#B5AEFD",
      borderWidth: 3,
      borderDash: [5, 5],
    },
  ],
};

export default function LineChart() {
  return (
    <div style={{ position: "relative", height: "275px" }}>
      <Line options={options} data={data} />
    </div>
  );
}
