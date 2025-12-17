// src/pages/SignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  IconButton,
  Switch,
  FormControlLabel,
  Alert,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// ✅ FIX: named import
import { approvedCustomers } from "../auth/approvedCustomers";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignIn() {
    const isApproved = approvedCustomers.includes(email.toLowerCase());

    if (!isApproved) {
      setError("Your email is not approved. Please contact CLIENTA support.");
      return;
    }

    // ✅ unified auth key (matches ProtectedRoute)
    localStorage.setItem(
      "clienta_user",
      JSON.stringify({ email })
    );

    navigate("/dashboard");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://i.pinimg.com/1200x/ed/93/05/ed93051c3e32be07fa14cf837aecb4f1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        position: "relative",
      }}
    >
      <Card sx={{ width: 420, borderRadius: 4 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #670D2F, #A53860)",
            py: 3,
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            CLIENTA Sign In
          </Typography>

          <Box sx={{ mt: 2 }}>
            <IconButton sx={{ color: "#fff" }}><FacebookIcon /></IconButton>
            <IconButton sx={{ color: "#fff" }}><GitHubIcon /></IconButton>
            <IconButton sx={{ color: "#fff" }}><GoogleIcon /></IconButton>
          </Box>
        </Box>

        <CardContent sx={{ p: 4 }}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Approved Email"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormControlLabel control={<Switch />} label="Remember me" />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSignIn}
          >
            SIGN IN
          </Button>

          <Typography align="center" mt={2}>
            Don&apos;t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "#670D2F", cursor: "pointer", fontWeight: 600 }}
            >
              Sign up
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
