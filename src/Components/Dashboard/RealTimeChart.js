import React from 'react'
import { Chart, Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 


function RealTimeChart() {
  return (
    <div>
      <div>
      <Chart
        data={{
          // x-axis label values
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
          datasets: [
            {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350,150],
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}
      />
    </div>
    </div>
  )
}

export default RealTimeChart
