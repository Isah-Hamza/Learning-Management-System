import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", sales: 2400 },
  { name: "Feb", sales: 1398 },
  { name: "Mar", sales: 9800 },
  { name: "Apr", sales: 6908 },
  { name: "May", sales: 4800 },
  { name: "Jun", sales: 7800 },
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3900 },
  { name: "Sep", sales: 8760 },
  { name: "Oct", sales: 6800 },
  { name: "Nov", sales: 8300 },
  { name: "Dec", sales: 7200 }
];

const CustomBar = (props) => {
  const { fill, ...rest } = props;
  return (
    <g>
      <rect fill="#eee" {...rest} />
      <rect fill={fill} {...rest} />
    </g>
  );
};

const BarChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#F08C00" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartExample;
