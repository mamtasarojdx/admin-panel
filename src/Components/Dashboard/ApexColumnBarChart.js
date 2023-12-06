import React from "react";
import Chart from "react-apexcharts";
import style from "./Dashboard.module.css";
const data = {
  series: [
    {
      // name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      // name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
      
    },
    // yaxis: {
    //   title: {
    //     text: "$ (thousands)",
    //   },
    // },
    fill: {
      opacity: 1,
     
      // colors: "#64c8ff"
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
};
function ApexColumnBarChart() {
  return (
    <>
      <Chart options={data.options} series={data.series} type="bar" height={350} className={style.apexChart}/>
    </>
  );
}
export default ApexColumnBarChart
