import MenuProvider from "../context/useMenu";
import Header from "../features/dashboard/header";
import Navbar from "../features/dashboard/navbar";
import { Outlet } from "react-router";
export default function Dashboard() {
  return (
    <>
      <MenuProvider>
        <Header />
        <Navbar />
        <Outlet />
      </MenuProvider>
    </>
  );
}
