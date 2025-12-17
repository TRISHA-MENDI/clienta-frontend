import { Paper, Typography, Box, Avatar, LinearProgress } from "@mui/material";

export default function ProjectsCard() {
  return (
    <Paper sx={{ p: 3, borderRadius: 4 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Project Status
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          fontWeight: 600,
          pb: 1,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Typography>Company</Typography>
        <Typography>Members</Typography>
        <Typography>Budget</Typography>
        <Typography>Completion</Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          py: 2,
          alignItems: "center",
        }}
      >
        <Typography>Material UI XD Version</Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32 }} />
          <Avatar sx={{ width: 32, height: 32 }} />
        </Box>

        <Typography>$14,000</Typography>

        <LinearProgress
          variant="determinate"
          value={70}
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>
    </Paper>
  );
}
