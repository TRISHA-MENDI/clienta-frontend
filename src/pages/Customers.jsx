// src/pages/Customers.jsx
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Paper
} from "@mui/material";
import { useState } from "react";

export default function Customers() {
  const customers = [
    {
      name: "Samsung",
      csm: "Mariah Mahone",
      function: "Manager",
      subFunction: "Organization",
      nps: 46,
      status: "Active",
      photo: "https://i.pravatar.cc/400?img=32"
    },
    {
      name: "Amazon",
      csm: "Chris Mann",
      function: "Programmer",
      subFunction: "Developer",
      nps: 90,
      status: "Active",
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Apple",
      csm: "George Harris",
      function: "Executive",
      subFunction: "Projects",
      nps: 82,
      status: "Active",
      photo: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Canva",
      csm: "Blair Bekkers",
      function: "Manager",
      subFunction: "Executive",
      nps: 68,
      status: "Active",
      photo: "https://i.pravatar.cc/150?img=14"
    },
    {
      name: "Softr",
      csm: "Alex Grey",
      function: "Programmer",
      subFunction: "Developer",
      nps: 80,
      status: "Active",
      photo: "https://i.pravatar.cc/400?img=68"
    },
    {
      name: "Spotify",
      csm: "Noah Wilson",
      function: "Programmer",
      subFunction: "Developer",
      nps: 40,
      status: "Inactive",
      photo: "https://i.pravatar.cc/150?img=16"
    }
  ];

  const statusColors = {
    Active: "success",
    Inactive: "error"
  };

  const [search, setSearch] = useState("");

  const filtered = customers.filter((c) => {
    const query = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(query) ||
      c.csm.toLowerCase().includes(query) ||
      c.function.toLowerCase().includes(query) ||
      c.subFunction.toLowerCase().includes(query)
    );
  });

  return (
    <Box sx={{ p: 1 }}>
      <h1>Customers</h1>
      {/* SEARCH BAR */}
      <TextField
        fullWidth
        placeholder="Search for a customer by name, CSM, function..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        sx={{
          mb: 3,
          background: "#fafafa",
          borderRadius: 2,
          "& .MuiOutlinedInput-root": { borderRadius: "10px" }
        }}
      />

      {/* TABLE */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Assigned CSM</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Function</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>NPS</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Subscription Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.map((row, index) => (
              <TableRow
                key={index}
                hover
                sx={{ "&:hover": { backgroundColor: "#f9f9f9" } }}
              >
                {/* Customer + Avatar */}
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={row.photo} alt={row.name} />
                    <Typography>{row.name}</Typography>
                  </Box>
                </TableCell>

                {/* Assigned CSM */}
                <TableCell>
                  <Chip
                    label={row.csm}
                    sx={{ fontWeight: 500 }}
                    variant="outlined"
                  />
                </TableCell>

                {/* Function Column (2-line layout) */}
                <TableCell>
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>
                      {row.function}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "12px", opacity: 0.7, mt: "-2px" }}
                    >
                      {row.subFunction}
                    </Typography>
                  </Box>
                </TableCell>

                {/* NPS */}
                <TableCell>
                  <Typography fontWeight={600}>{row.nps}</Typography>
                </TableCell>

                {/* Subscription Status */}
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusColors[row.status]}
                    sx={{ px: 1.5 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
