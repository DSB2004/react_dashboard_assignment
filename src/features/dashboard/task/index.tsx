import React from "react";
import TableHead from "../../../components/tableHead";
import TableRow from "../../../components/tableRow";
import TableData from "../../../components/tableData";
import tasks from "../../../assets/task.json";
export default function Task() {
  return (
    <div className="overflow-x-auto my-10 min-w-96 mx-auto w-11/12 ">
      <h1 className="text-xl uppercase  my-2  mb-4 font-bold text-center  dark:text-white ">
        task Details
      </h1>
      <table className="w-full bg-white  dark:bg-neutral-900  shadow-lg duration-300 p-2">
        <thead>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Assigned By</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <>
              <TableRow>
                <TableData>{task.title}</TableData>
                <TableData>{task.assignedBy}</TableData>
                <TableData>{task.createdOn}</TableData>
                <TableData>{task.status}</TableData>
              </TableRow>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
