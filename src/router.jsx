import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

// Pages
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Customers from "./pages/Customers.jsx";
import CustomerDetail from "./pages/CustomerDetail.jsx";
import Tasks from "./pages/Tasks.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

// Auth
import ProtectedRouter from "./auth/ProtectedRouter"; // ✅ FIXED NAME

const router = createBrowserRouter([
  // 🌐 PUBLIC ROUTES (NO SIDEBAR / NO NAVBAR)
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  // 🔐 PROTECTED APP ROUTES
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <MainLayout />
      </ProtectedRouter>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "customers", element: <Customers /> },
      { path: "customers/:id", element: <CustomerDetail /> },
      { path: "tasks", element: <Tasks /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

export default router;
