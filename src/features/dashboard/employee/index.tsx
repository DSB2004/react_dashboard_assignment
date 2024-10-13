import React from "react";
import TableHead from "../../../components/tableHead";
import TableRow from "../../../components/tableRow";
import TableData from "../../../components/tableData";
import employees from "../../../assets/employee.json";
export default function Employee() {
  return (
    <div className="overflow-x-auto my-10 min-w-96 mx-auto w-11/12 ">
      <h1 className="text-xl uppercase  my-2  mb-4 font-bold text-center dark:text-white ">
        Employee Details
      </h1>
      <table className="w-full bg-white  dark:bg-neutral-900  shadow-lg duration-300 p-4">
        <thead>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <>
              <TableRow>
                <TableData>{employee.name}</TableData>
                <TableData>{employee.email}</TableData>
                <TableData>{employee.role}</TableData>
                <TableData>{employee.status}</TableData>
              </TableRow>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
