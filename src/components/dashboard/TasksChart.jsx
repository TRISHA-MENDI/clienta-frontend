// src/components/dashboard/TasksChart.jsx
import { Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function TasksChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Tasks",
        data: [20, 35, 40, 50, 70, 45],
        backgroundColor: "#4a6cf7",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        displayColors: false,
      },
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#eee" } },
    },
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }} elevation={3}>
      <Typography variant="h6" mb={2}>
        Monthly Tasks
      </Typography>
      <Bar data={data} options={options} />
    </Paper>
  );
}
