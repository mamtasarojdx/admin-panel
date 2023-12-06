import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import style from "./Dashboard.module.css";

const DonutChart = () => {
  // Sample data
  const data = [
    // { name: "Geeksforgeeks", students: 0 },
    { name: "2020", students: 25 },
    { name: "2020", students: 40 },
    { name: "2020", students: 38 },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto 10%",
       
      }}
    >
      <PieChart width={120} height={120} className={style.DonutChart}>
        <Tooltip />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={60}
          innerRadius={40}
          fill="#5d87ff"
          // fill="#5d87ff"
          // label={({ name, students }) =>
          //     `${name}: ${students}`
          // }
        />
      </PieChart>
    </div>
  );
};

export default DonutChart;
