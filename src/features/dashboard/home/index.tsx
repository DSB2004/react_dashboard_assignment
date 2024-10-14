import React from "react";
import dashboard from "../../../assets/dashboard.json"; // Ensure this path is correct
import BarGraph from "../../../components/barGraph";
import LineGraph from "../../../components/lineGraph";
import PieGraph from "../../../components/pieGraph";
import AreaGraph from "../../../components/areaGraph";
export default function Home() {
  return (
    <>
      <div
        style={{ height: "85vh" }}
        className="flex justify-evenly items-center flex-col w-11/12 my-10 min-w-98 mx-auto overflow-y-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <BarGraph data={dashboard.production} title="Production Value" />
          <LineGraph data={dashboard.marketing} title="Marketing" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-4 w-full">
          <AreaGraph data={dashboard.sales} title="Sales" />
          <PieGraph data={dashboard.subscribers} title="Subscriber" />
          <PieGraph data={dashboard.value} title="Stock Volume" />
        </div>
      </div>
    </>
  );
}
