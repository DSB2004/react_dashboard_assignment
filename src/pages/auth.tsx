import React from "react";
import { Outlet } from "react-router-dom";
export default function Auth() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </>
  );
}
