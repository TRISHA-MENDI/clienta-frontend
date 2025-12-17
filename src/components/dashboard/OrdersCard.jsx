import { Paper, Typography, Box, Avatar } from "@mui/material";

export default function OrdersCard() {
  const items = [
    {
      color: "green",
      amount: 2400,
      user: "Design changes",
      date: "22 DEC 7:20 PM",
    },
    {
      color: "red",
      user: "New order #1832412",
      date: "21 DEC 11 PM",
    },
    {
      color: "blue",
      user: "Server payments for April",
      date: "21 DEC 9:34 PM",
    },
  ];

  return (
    <Paper sx={{ p: 3, borderRadius: 4 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Orders overview
      </Typography>

      {items.map((o, i) => (
        <Box key={i} sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: o.color }} />
          <Box>
            <Typography fontWeight={600}>
              {o.amount
                ? `₹${o.amount.toLocaleString("en-IN")}, ${o.user}`
                : o.user}
            </Typography>
            <Typography fontSize={12} color="gray">
              {o.date}
            </Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
