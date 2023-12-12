import React from "react";
import style from "./Dashboard.module.css";
import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const pdata = [
  {
    s: 11,
  },
  {
    s: 15,
  },
  {
    s: 5,
  },
  {
    s: 16,
  },
  {
    s: 8,
  },
  {
    s: 12,
  },
];

function RealTimeChart() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3} className={style.realChart} >
        <LineChart data={pdata} margin={{ right: 20, left: 18, top: 5 }}  width={300} >
          <CartesianGrid vertical={false} strokeDasharray="0 9" className={style.legendText}/>
          <XAxis dataKey="name" interval={"preserveStartEnd"} tickLine={false} hide className={style.legendText} />
          <YAxis tickLine={false} hide className={style.legendText}/>
          <Legend  style={{display:"none"}}/>
          <Tooltip />
          <Line dataKey="s"  stroke="rgb(100,200,255)" activeDot={{ r: 6 }} strokeWidth={2} dot={false} type="monotone" />
        </LineChart >
      </ResponsiveContainer >
    </>
  );
}

export default RealTimeChart;
