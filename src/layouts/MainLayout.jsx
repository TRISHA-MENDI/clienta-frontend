// src/layouts/MainLayout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { Box } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";

const NAVBAR_HEIGHT = 70; // 🔑 Must match Navbar Toolbar height

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Route → title + icon
  const pageConfig = {
    "/dashboard": {
      title: "Dashboard",
      icon: <DashboardIcon fontSize="small" />,
    },
    "/customers": {
      title: "Customers",
      icon: <PeopleIcon fontSize="small" />,
    },
    "/tasks": {
      title: "Tasks",
      icon: <AssignmentIcon fontSize="small" />,
    },
    "/settings": {
      title: "Settings",
      icon: <SettingsIcon fontSize="small" />,
    },
    "/profile": {
      title: "Profile",
      icon: <PeopleIcon fontSize="small" />,
    },
  };

  const isCustomerDetail =
    location.pathname.startsWith("/customers/") &&
    location.pathname !== "/customers";

  const page = isCustomerDetail
    ? { title: "Customer Details", icon: <PeopleIcon fontSize="small" /> }
    : pageConfig[location.pathname] ||
      pageConfig["/dashboard"];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT AREA */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        {/* FIXED NAVBAR */}
        <Navbar />

        {/* CONTENT OFFSET FOR FIXED NAVBAR */}
        <Box sx={{ pt: `${NAVBAR_HEIGHT}px` }}>
          {/* BREADCRUMB + TITLE */}
          <Box sx={{ px: 3, pt: 2, pb: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                opacity: 0.7,
                cursor: "pointer",
                width: "fit-content",
              }}
              onClick={() => navigate("/dashboard")}
            >
              <HomeIcon sx={{ fontSize: 18 }} />
              / {page.title}
            </Box>
          </Box>

          {/* PAGE CONTENT */}
          <Box sx={{ px: 3, pb: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
