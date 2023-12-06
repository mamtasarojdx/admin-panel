import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function RealTimeChart() {
  const data = {
    labels: ["", "", "","", "", "","", ],
    datasets: [
      {
        // label: "Sales of the Week",
        data: [0,0.1,0,0.0,0.1,0],
        backgroundColor: "#6bcaff",
        borderColor: "#6bcaff",
        pointBorderColor: "#6bcaff",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    Plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 0.1,
      },
    },
  };
  return (
    <div>
      <div style={{ width: "20px", height: "20px", padding: "0px" }}></div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default RealTimeChart;
