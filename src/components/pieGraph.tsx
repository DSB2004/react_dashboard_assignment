import React from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface IPROPS {
  data: {
    name?: string;
    value?: number;
  }[];
  title: string;
}

const PieGraph: React.FC<IPROPS> = ({ data, title }) => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center align-middle p-3 rounded-xl bg-white  dark:bg-neutral-900">
      <h1 className="uppercase font-seminbold mt-2  text-lg dark:text-white">
        {title}
      </h1>
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
