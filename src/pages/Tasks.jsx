// src/pages/Tasks.jsx
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

export default function Tasks() {
  // Load tasks from localStorage OR empty array
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    priority: "Medium",
  });

  // Save tasks to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(events));
  }, [events]);

  const handleDateClick = (arg) => {
    setNewTask({ ...newTask, date: arg.dateStr });
    setOpen(true);
  };

  const handleAddTask = () => {
    const updatedEvents = [
      ...events,
      {
        id: String(Date.now()),
        title: newTask.title,
        date: newTask.date,
        priority: newTask.priority,
      },
    ];

    setEvents(updatedEvents);
    setOpen(false);

    // Reset form
    setNewTask({ title: "", date: "", priority: "Medium" });
  };

  const priorityColors = {
    High: "red",
    Medium: "#1976d2",
    Low: "green",
  };

  return (
    <Box sx={{ p: 3 }}>
      <h1>Tasks Calender</h1>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
      </Typography>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map((ev) => ({
          ...ev,
          color: priorityColors[ev.priority],
        }))}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
      />

      {/* Add Task Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            p: 3,
            width: 400,
            bgcolor: "#fff",
            mx: "auto",
            mt: "15vh",
            borderRadius: 2,
            boxShadow: 10,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add Task
          </Typography>

          <TextField
            fullWidth
            label="Task Title"
            value={newTask.title}
            sx={{ mb: 2 }}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />

          <TextField
            fullWidth
            type="date"
            label="Date"
            value={newTask.date}
            sx={{ mb: 2 }}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            select
            fullWidth
            label="Priority"
            value={newTask.priority}
            sx={{ mb: 3 }}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>

          <Button
            variant="contained"
            fullWidth
            disabled={!newTask.title}
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
