// src/components/dashboard/Dashboard.jsx
import { Box, Grid } from "@mui/material";
import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import TasksChart from "./TasksChart";
import ProjectsCard from "./ProjectsCard";
import OrdersCard from "./OrdersCard";
import ProjectsSection from "./ProjectsSection";

export default function Dashboard() {
  return (
    <Box sx={{ px: 3, pt: 1 }}>
       <h1>Dashboard</h1>

      <Grid container spacing={3}>
        {/* TOP STATS */}
        <Grid item xs={12} md={3}>
          <StatCard
            title="Bookings"
            value="281"
            subtitle="+55% than last week"
            icon="bar"
            color="#4a6cf7"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Today's Users"
            value="2,300"
            subtitle="+3% than last month"
            icon="users"
            color="#17b978"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Revenue"
            value="34k"
            subtitle="+1% than yesterday"
            icon="store"
            color="#1cc88a"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Followers"
            value="+91"
            subtitle="Just updated"
            icon="people"
            color="#ff4081"
          />
        </Grid>

        {/* CHARTS */}
        <Grid item xs={12} md={6}>
          <SalesChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <TasksChart />
        </Grid>

        {/* 🔥 NEW PROJECTS SECTION (4 Big Cards) */}
        <Grid item xs={12}>
          <ProjectsSection />
        </Grid>

        {/* 📌 OLD Projects + Orders Section (keep this) */}
        <Grid item xs={12} md={8}>
          <ProjectsCard />
        </Grid>

        <Grid item xs={12} md={4}>
          <OrdersCard />
        </Grid>
      </Grid>
    </Box>
  );
}
