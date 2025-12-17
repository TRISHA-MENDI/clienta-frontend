import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { approvedCustomers } from "../auth/approvedCustomers";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSignUp = () => {
    if (!agree) {
      alert("Please agree to the Terms and Conditions");
      return;
    }

    if (!approvedCustomers.includes(email)) {
      alert("Access denied. You are not an authorized CLIENTA customer.");
      return;
    }

    // Save verified user
    localStorage.setItem(
      "clienta_user",
      JSON.stringify({
        name,
        email,
        role: "customer",
      })
    );

    alert("Registration successful!");
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://i.pinimg.com/1200x/86/a7/62/86a7620ac2f901979be855970379d72c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        py: 5,
        position: "relative",
      }}
    >
      {/* SIGN-UP CARD */}
      <Card
        sx={{
          width: "420px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #450693 0%, #9E1C60 100%)",
            py: 3,
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Join CLIENTA
          </Typography>
          <Typography sx={{ mt: 1, opacity: 0.8 }}>
            Register with your verified company email
          </Typography>
        </Box>

        {/* FORM */}
        <CardContent sx={{ p: 4 }}>
          <TextField
            label="Full Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 1 }}
          />

          {/* TERMS */}
          <FormControlLabel
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            }
            label={
              <span>
                I agree to the{" "}
                <span style={{ color: "#450693", fontWeight: 600 }}>
                  Terms and Conditions
                </span>
              </span>
            }
            sx={{ mt: 1 }}
          />

          {/* SUBMIT */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleSignUp}
            sx={{
              background: "linear-gradient(135deg, #450693 0%, #9E1C60 100%)",
              py: 1.2,
              fontWeight: 700,
              borderRadius: 2,
              mt: 2,
            }}
          >
            SIGN UP
          </Button>

          {/* SWITCH */}
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              style={{ color: "#450693", cursor: "pointer", fontWeight: 600 }}
            >
              Sign In
            </span>
          </Typography>
        </CardContent>
      </Card>

      {/* FOOTER */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        © 2025 CLIENTA — Client Relationship Platform
      </Box>
    </Box>
  );
}
