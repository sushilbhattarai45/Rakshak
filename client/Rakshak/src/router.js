import { Navigate, useRoutes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";

export default function Router() {
  const isAuthenticated = false;
  return useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [{ path: "", element: <Home /> }],
    },
  ]);
}
