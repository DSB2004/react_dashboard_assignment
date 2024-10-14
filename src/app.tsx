import { useEffect } from "react";
import Login from "./features/auth/login";
import SignUp from "./features/auth/signup";
import ForgetPassword from "./features/auth/forget-password";
import ResetPassword from "./features/auth/reset-password";
import Settings from "./features/dashboard/settings";
import Employee from "./features/dashboard/employee";
import Task from "./features/dashboard/task";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Home from "./features/dashboard/home";
import AlertProvider from "./context/useAlert";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { initTheme } from "./utils/theme.util";

function App() {
  useEffect(() => {
    initTheme();
  }, []);
  return (
    <>
      <div className="min-h-svh relative duration-300 bg-gray-200 dark:bg-neutral-800">
        <AlertProvider>
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Home />}></Route>
              <Route path="dashboard" element={<Home />} />
              <Route path="employee" element={<Employee />}></Route>
              <Route path="task" element={<Task />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
            <Route path="/auth" element={<Auth />}>
              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<SignUp />}></Route>
              <Route
                path="forget-password"
                element={<ForgetPassword />}
              ></Route>
              <Route path="reset-password" element={<ResetPassword />}></Route>
            </Route>
            <Route path="*" element={<>not found</>} />
          </Routes>
          {/* </BrowserRouter> */}
        </AlertProvider>
      </div>
    </>
  );
}

export default App;
