// src/pages/Profile.jsx
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Switch,
  Divider
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Profile() {
  return (
    <Box sx={{ p: 3 }}>
      <h1>Profile</h1>
      {/* HEADER SECTION */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderRadius: 3,
          mb: 3
        }}
      >
        <Avatar
          src="https://i.pinimg.com/736x/17/8d/e9/178de9c31035661aa9a4e345a861f643.jpg"
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Rachael karen
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
            CEO / Co-Founder
          </Typography>
        </Box>

        {/* RIGHT SIDE BUTTONS REMOVED (as requested) */}
      </Paper>

      <Box sx={{ display: "flex", gap: 3 }}>
        {/* LEFT: PLATFORM SETTINGS */}
        <Paper sx={{ flex: 1, p: 3, borderRadius: 3 }} elevation={0}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Platform Settings
          </Typography>

          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ mt: 2, mb: 1 }}
          >
            ACCOUNT
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Switch defaultChecked />
            <Typography>Email me when someone follows me</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Switch />
            <Typography>Email me when someone answers my post</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Switch defaultChecked />
            <Typography>Email me when someone mentions me</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            APPLICATION
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Switch />
            <Typography>New launches and projects</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Switch defaultChecked />
            <Typography>Monthly product updates</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Switch />
            <Typography>Subscribe to newsletter</Typography>
          </Box>
        </Paper>

        {/* MIDDLE: PROFILE INFORMATION */}
        <Paper sx={{ flex: 1.5, p: 3, borderRadius: 3 }} elevation={0}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="bold">
              Profile Information
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                cursor: "pointer",
                color: "#4a4a4a",
                "&:hover": { color: "#000" }
              }}
            >
              EDIT
            </Typography>
          </Box>

          <Typography sx={{ mt: 1, mb: 2 }}>
            Hi, I’m Rachael Karen. I am passionate about building meaningful connections, optimizing customer success processes, and helping teams grow with clarity and purpose. I believe in taking thoughtful decisions, creating long-term value, and choosing the path that brings consistent improvement, even when it's challenging.
          </Typography>

          {/* DETAILS */}
          <Box sx={{ lineHeight: 3 }}>
            <Typography>
              <strong>Full Name:</strong> Rachael karen
            </Typography>

            <Typography>
              <strong>Mobile:</strong> 91 7743228662
            </Typography>

            <Typography>
              <strong>Email:</strong> rachael@mail.com
            </Typography>

            <Typography>
              <strong>Location:</strong> INDIA
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Typography sx={{ fontWeight: 600 }}>Social:</Typography>

              <FacebookIcon
                sx={{
                  fontSize: 22,
                  cursor: "pointer",
                  opacity: 0.8,
                  "&:hover": { color: "#1877F2", opacity: 1 }
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: 22,
                  cursor: "pointer",
                  opacity: 0.8,
                  "&:hover": { color: "#1DA1F2", opacity: 1 }
                }}
              />
              <InstagramIcon
                sx={{
                  fontSize: 22,
                  cursor: "pointer",
                  opacity: 0.8,
                  "&:hover": { color: "#E1306C", opacity: 1 }
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/* RIGHT: CONVERSATIONS */}
        <Paper sx={{ flex: 1, p: 3, borderRadius: 3 }} elevation={0}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Conversations
          </Typography>

          {[
            { name: "Sophie B.", msg: "Hi! I need more information.." },
            { name: "Anne Marie", msg: "Awesome work, can you.." },
            { name: "Ivanna", msg: "About files I can.." },
            { name: "Peterson", msg: "Have a great afternoon.." },
            { name: "Nick Daniel", msg: "Hi! I need more information.." }
          ].map((c, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar src={`https://i.pravatar.cc/150?img=${20 + i}`} />
                <Box>
                  <Typography fontWeight="bold">{c.name}</Typography>
                  <Typography sx={{ fontSize: 13, opacity: 0.7 }}>
                    {c.msg}
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#3D5AFE",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                REPLY
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
