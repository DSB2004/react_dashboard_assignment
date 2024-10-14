import { Outlet } from "react-router";
import MenuProvider from "../context/useMenu";
import Header from "../features/dashboard/header";
import Navbar from "../features/dashboard/navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../lib/firebase";
export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        navigate("/auth/login");
      }
    });
  }, []);

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
