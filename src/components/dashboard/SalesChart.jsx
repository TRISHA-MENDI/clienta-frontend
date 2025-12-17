// src/components/dashboard/SalesChart.jsx
import { Paper, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart plugins
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SalesChart() {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Mobile apps",
        data: [100, 120, 300, 250, 200, 350, 300, 400, 430],
        borderColor: "#4a6cf7",
        backgroundColor: "rgba(74,108,247,0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4a6cf7",
      },
    ],
  };

  // TOOLTIP ENABLED HERE 🎉
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,          // SHOW POP-UP TOOLTIP
        backgroundColor: "#000",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: { beginAtZero: false },
    },
  };

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" mb={2}>
        Daily Sales
      </Typography>
      <Line data={data} options={options} />
    </Paper>
  );
}
