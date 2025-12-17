import { useContext, useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Paper,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import EmailIcon from "@mui/icons-material/Email";
import PodcastIcon from "@mui/icons-material/Podcasts";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { ColorModeContext } from "../theme";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [openNotif, setOpenNotif] = useState(false);
  const notifRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotif(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AppBar
      position="fixed" // ✅ FIXED (not moving)
      elevation={1}
      sx={{
        backgroundColor: theme.palette.background.paper, // ✅ SOLID COLOR
        color: theme.palette.text.primary,
        boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
        zIndex: (theme) => theme.zIndex.drawer + 1, // ✅ above sidebar
        px: 2,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 70,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT PLACEHOLDER (kept for alignment consistency) */}
        <Box />

        {/* RIGHT SECTION */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Search box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.08)"
                : "#f1f3f6",
              px: 1.5,
              py: 0.6,
              borderRadius: "12px",
              width: "250px",
            }}
          >
            <SearchIcon sx={{ opacity: 0.6, mr: 1 }} />
            <input
              type="text"
              placeholder="Search here"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                background: "transparent",
                color: theme.palette.text.primary,
                fontSize: "15px",
              }}
            />
          </Box>

          {/* NOTIFICATIONS */}
          <Box sx={{ position: "relative" }} ref={notifRef}>
            <IconButton onClick={() => setOpenNotif(!openNotif)}>
              <NotificationsIcon />
            </IconButton>

            {openNotif && (
              <Paper
                elevation={4}
                sx={{
                  position: "absolute",
                  top: "48px",
                  right: 0,
                  width: "280px",
                  p: 2,
                  borderRadius: "12px",
                  zIndex: 2000,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ color: "#3f51b5", mr: 2 }} />
                  <Typography fontSize={14}>
                    Check new messages
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PodcastIcon sx={{ color: "#9c27b0", mr: 2 }} />
                  <Typography fontSize={14}>
                    Manage Podcast sessions
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon sx={{ color: "#4caf50", mr: 2 }} />
                  <Typography fontSize={14}>
                    Payment successfully completed
                  </Typography>
                </Box>
              </Paper>
            )}
          </Box>

          {/* THEME TOGGLE */}
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>

          {/* AVATAR */}
          <Avatar sx={{ bgcolor: "primary.main", cursor: "pointer" }}>
            T
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
