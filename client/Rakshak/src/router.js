import { Navigate, useRoutes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import NotAuthNavBar from "./components/notAuthNavBar.jsx";
import NotAuthHome from "./components/notAuthHome.jsx";

export default function Router() {
  const isAuthenticated = false;
  return useRoutes([
    {
      path: "",
      element: isAuthenticated ? <Navbar /> : <NotAuthNavBar />,
      children: [
        { path: "", element: isAuthenticated ? <Home /> : <NotAuthHome /> },
      ],
    },
  ]);
}
