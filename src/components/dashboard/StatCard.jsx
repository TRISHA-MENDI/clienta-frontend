// src/components/dashboard/StatCard.jsx
import { Box, Paper, Typography, Avatar } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function StatCard({ title, value, subtitle, color, icon }) {
  const icons = {
    bar: <BarChartIcon />,
    users: <PeopleIcon />,
    store: <StoreIcon />,
    people: <PersonAddIcon />
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Avatar sx={{ bgcolor: color, width: 50, height: 50 }}>
        {icons[icon]}
      </Avatar>

      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>

      <Typography variant="h4" fontWeight={800}>
        {value}
      </Typography>

      <Typography sx={{ color: "green", fontSize: 14 }}>
        {subtitle}
      </Typography>
    </Paper>
  );
}
