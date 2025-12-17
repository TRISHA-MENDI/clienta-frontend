// src/pages/Settings.jsx
import {
  Box,
  Card,
  Typography,
  Switch,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";

// ✅ Feedback component
import FeedbackCard from "../components/settings/FeedbackCard";

export default function Settings() {
  return (
    <Box sx={{ p: 3 }}>
      {/* PAGE TITLE */}
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Settings
      </Typography>

      {/* TOP SECTION — Two Column Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 3,
        }}
      >
        {/* LEFT — PLATFORM SETTINGS */}
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "#151c26",
            color: "#fff",
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Platform Settings
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ opacity: 0.5, mt: 2, mb: 1 }}
          >
            ACCOUNT
          </Typography>

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Email me when someone follows me"
          />

          <FormControlLabel
            control={<Switch />}
            label="Email me when someone answers my post"
          />

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Email me when someone mentions me"
          />

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

          <Typography
            variant="subtitle2"
            sx={{ opacity: 0.5, mt: 2, mb: 1 }}
          >
            APPLICATION
          </Typography>

          <FormControlLabel
            control={<Switch />}
            label="New product updates"
          />

          <FormControlLabel
            control={<Switch />}
            label="Monthly newsletter"
          />
        </Card>

        {/* RIGHT — BILLING & SUBSCRIPTION */}
        <Card
          sx={{
            borderRadius: 3,
            p: 3,
            backgroundColor: "#151c26",
            color: "#fff",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Billing & Subscription
            </Typography>

            <Button
              variant="text"
              sx={{
                color: "#4a90e2",
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": { opacity: 0.8 },
              }}
            >
              MANAGE
            </Button>
          </Box>

          <Typography sx={{ opacity: 0.6, mb: 1 }}>
            Current Plan
          </Typography>
          <Typography fontWeight={700} sx={{ fontSize: "18px", mb: 2 }}>
            Startup Plan — ₹499/month
          </Typography>

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

          <Typography sx={{ opacity: 0.6, mb: 1 }}>
            Next Billing Date
          </Typography>
          <Typography fontWeight={600} sx={{ mb: 2 }}>
            January 27, 2025
          </Typography>

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

          <Typography sx={{ opacity: 0.6, mb: 1 }}>
            Payment Method
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="visa"
              style={{ height: "24px" }}
            />
            <Typography fontWeight={600}>
              Visa •••• 4321
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: "linear-gradient(135deg, #4a6cf7, #1B3C53)",
              py: 1.2,
              fontWeight: 700,
              borderRadius: 2,
            }}
          >
            Upgrade Plan
          </Button>
        </Card>
      </Box>

      {/* BOTTOM SECTION — SECURITY */}
      <Card
        sx={{
          mt: 3,
          borderRadius: 3,
          p: 3,
          backgroundColor: "#151c26",
          color: "#fff",
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
          Security Settings
        </Typography>

        <FormControlLabel
          control={<Switch />}
          label="Enable Two-Factor Authentication"
        />

        <FormControlLabel
          control={<Switch />}
          label="Send login alerts to my email"
        />

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Allow access from new devices"
        />
      </Card>

      {/* ✅ USER FEEDBACK SECTION */}
      <FeedbackCard />
    </Box>
  );
}
