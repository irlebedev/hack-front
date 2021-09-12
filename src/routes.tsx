import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "./layouts/main";
import { AdminPage } from "./pages/AdminPage";
import { AuthForm } from "./pages/AuthForm";
import MainApp from "./pages/Main";
import { PlanForm } from "./pages/PlanForm";

// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
// import User from './pages/User';
// import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthForm />,
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        { path: "/main/", element: <Navigate to="/main/app" /> },
        { path: "/main/app", element: <MainApp /> },
        { path: "/main/plan", element: <PlanForm /> },
        { path: "/main/admin", element: <AdminPage /> },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> }
      ],
    },
    { path: "/", element: <Navigate to="/auth" /> },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
