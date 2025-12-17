import { useState } from "react";
import {
  Card,
  Typography,
  TextField,
  Button,
  Rating,
  Box,
} from "@mui/material";

export default function FeedbackCard() {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const existing =
      JSON.parse(localStorage.getItem("clienta_feedback")) || [];

    existing.push({
      rating,
      feedback,
      date: new Date().toISOString(),
    });

    localStorage.setItem(
      "clienta_feedback",
      JSON.stringify(existing)
    );

    setSubmitted(true);
    setFeedback("");
  };

  return (
    <Card sx={{ p: 3, mt: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={700} mb={1}>
        User Feedback
      </Typography>

      <Typography sx={{ opacity: 0.7, mb: 2 }}>
        Share your experience to help us improve CLIENTA
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={600}>Rating</Typography>
        <Rating
          value={rating}
          onChange={(e, value) => setRating(value)}
        />
      </Box>

      <TextField
        label="Your feedback"
        multiline
        rows={4}
        fullWidth
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!feedback}
      >
        Submit Feedback
      </Button>

      {submitted && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          Thank you! Your feedback has been recorded.
        </Typography>
      )}
    </Card>
  );
}
