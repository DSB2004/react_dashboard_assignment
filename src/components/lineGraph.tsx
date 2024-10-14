import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IPROPS {
  data: {
    name?: string;
    value?: number;
  }[];
  title: string;
}

const LineGraph: React.FC<IPROPS> = ({ data,title }) => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center align-middle p-3 rounded-xl bg-white  dark:bg-neutral-900">
      <h1 className="uppercase font-seminbold mt-2  text-lg dark:text-white">
        {title}
      </h1>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="value" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
