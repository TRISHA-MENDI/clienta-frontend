import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

// ICONS
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SettingsIcon from "@mui/icons-material/Settings";

const NAVBAR_HEIGHT = 70;

const menuItems = [
  { text: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { text: "Customers", path: "/customers", icon: <PeopleIcon /> },
  { text: "Tasks", path: "/tasks", icon: <ListAltIcon /> },
  { text: "Profile", path: "/profile", icon: <PersonIcon /> },

  // ✅ SETTINGS ABOVE AUTH
  { text: "Settings", path: "/settings", icon: <SettingsIcon /> },

  // 🔐 AUTH (BOTTOM)
  { text: "Sign In", path: "/signin", icon: <LoginIcon /> },
  { text: "Sign Up", path: "/signup", icon: <AppRegistrationIcon /> },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 260,
          top: `${NAVBAR_HEIGHT}px`,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          background: "linear-gradient(180deg, #0f172a, #020617)",
          color: "#fff",
          border: "none",
          px: 2,
          overflowY: "auto",
        },
      }}
    >
      {/* BRAND / LOGO */}
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #4a6cf7, #1B3C53)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: 24,
            mx: "auto",
            mb: 1,
            letterSpacing: 1,
          }}
        >
          C
        </Box>

        <Typography variant="h6" fontWeight={800} letterSpacing={1}>
          CLIENTA
        </Typography>

        <Typography
          variant="caption"
          sx={{ opacity: 0.6, letterSpacing: 0.5 }}
        >
          Client Relationship Platform
        </Typography>
      </Box>

      {/* MENU */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#3b82f6" : "transparent",
                borderRadius: 10,
                marginBottom: 8,
              })}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
