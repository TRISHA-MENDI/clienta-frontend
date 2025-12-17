// src/pages/CustomerDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NoteIcon from "@mui/icons-material/Note";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimelineIcon from "@mui/icons-material/Timeline";

function getCustomerList() {
  try {
    const raw = localStorage.getItem("crm_customers");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCustomerList(list) {
  localStorage.setItem("crm_customers", JSON.stringify(list));
}

export default function CustomerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const customers = getCustomerList();
  const customer = customers.find((c) => c.id === Number(id));

  if (!customer) {
    return (
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/customers")}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Customer not found</Typography>
        </Paper>
      </Box>
    );
  }

  const initials = customer.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const statusColor = {
    Active: "success",
    Inactive: "default",
    Pending: "warning",
  };

  // ---------------- ACTIVITY ----------------
  const [activity, setActivity] = React.useState(customer.activity || []);

  function addActivity(text) {
    const date = new Date().toISOString().split("T")[0];
    const newEntry = { text, date };

    const updated = [newEntry, ...activity];
    setActivity(updated);

    const updatedList = customers.map((c) =>
      c.id === customer.id ? { ...c, activity: updated } : c
    );

    saveCustomerList(updatedList);
  }

  // ---------------- NOTES CRUD ----------------
  const [notes, setNotes] = React.useState(customer.notes || []);
  const [openNote, setOpenNote] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [noteText, setNoteText] = React.useState("");

  function saveNotes(updated) {
    setNotes(updated);

    const updatedList = customers.map((c) =>
      c.id === customer.id ? { ...c, notes: updated } : c
    );

    saveCustomerList(updatedList);
  }

  function handleSaveNote() {
    const date = new Date().toISOString().split("T")[0];
    let updated;

    if (editingIndex !== null) {
      updated = notes.map((n, i) =>
        i === editingIndex ? { ...n, text: noteText } : n
      );
      addActivity("📝 Note updated");
    } else {
      updated = [...notes, { text: noteText, date }];
      addActivity("📝 Note added");
    }

    saveNotes(updated);
    setOpenNote(false);
  }

  function handleDeleteNote(i) {
    const updated = notes.filter((_, index) => index !== i);
    saveNotes(updated);
    addActivity("❌ Note deleted");
  }

  function handleAddNote() {
    setEditingIndex(null);
    setNoteText("");
    setOpenNote(true);
  }

  function handleEditNote(i) {
    setEditingIndex(i);
    setNoteText(notes[i].text);
    setOpenNote(true);
  }

  // ---------------- EDIT CUSTOMER MODAL ----------------
  const [openEdit, setOpenEdit] = React.useState(false);

  const [form, setForm] = React.useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    city: customer.city,
    status: customer.status,
    avatar: customer.avatar || "",
  });

  function handleSaveEdit() {
    const updatedList = customers.map((c) =>
      c.id === customer.id ? { ...c, ...form } : c
    );

    saveCustomerList(updatedList);
    addActivity("👤 Profile updated");
    window.location.reload();
  }

  // ----------------------------------------------------
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={2}>
        Customer Profile
      </Typography>

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/customers")}
        sx={{ mb: 2 }}
      >
        Back to Customers
      </Button>

      {/* PROFILE CARD */}
      <Paper
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          gap: 3,
          mb: 3,
          borderRadius: 3,
        }}
      >
        <Avatar
          src={customer.avatar || ""}
          sx={{ width: 90, height: 90, bgcolor: "primary.main", fontSize: 36 }}
        >
          {!customer.avatar && initials}
        </Avatar>

        <Box>
          <Typography variant="h5" fontWeight={700}>
            {customer.name}
          </Typography>

          <Typography>{customer.email}</Typography>
          <Typography>{customer.phone}</Typography>
          <Typography>{customer.city}</Typography>

          <Chip
            label={customer.status}
            color={statusColor[customer.status]}
            sx={{ mt: 1 }}
          />

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={() => setOpenEdit(true)}>
              Edit Customer
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* GRID: ACTIVITY + NOTES */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 2,
        }}
      >
        {/* ACTIVITY TIMELINE */}
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Typography variant="h6" mb={1.5}>
            <TimelineIcon sx={{ mr: 1 }} />
            Activity Timeline
          </Typography>

          <List dense>
            {activity.length === 0 && (
              <Typography sx={{ mt: 1, opacity: 0.7 }}>
                No activity yet.
              </Typography>
            )}

            {activity.map((item, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar>
                    <EventNoteIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary={item.text} secondary={item.date} />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* NOTES */}
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Notes</Typography>
            <Button variant="contained" size="small" onClick={handleAddNote}>
              Add Note
            </Button>
          </Box>

          <List dense>
            {notes.length === 0 && (
              <Typography sx={{ mt: 2, opacity: 0.6 }}>
                No notes yet.
              </Typography>
            )}

            {notes.map((note, i) => (
              <ListItem
                key={i}
                alignItems="flex-start"
                secondaryAction={
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton onClick={() => handleEditNote(i)}>
                      <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton onClick={() => handleDeleteNote(i)}>
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                  </Box>
                }
                sx={{ pr: 10 }} // fix overlapping
              >
                <ListItemAvatar>
                  <Avatar>
                    <NoteIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={note.text}
                  secondary={`Added on ${note.date}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      {/* ADD / EDIT NOTE DIALOG */}
      <Dialog open={openNote} onClose={() => setOpenNote(false)}>
        <DialogTitle>
          {editingIndex !== null ? "Edit Note" : "Add Note"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Note"
            multiline
            minRows={3}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenNote(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveNote}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* EDIT CUSTOMER DIALOG */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent sx={{ minWidth: 400 }}>
          {/* AVATAR UPLOAD */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar
              src={form.avatar || ""}
              sx={{ width: 70, height: 70, bgcolor: "primary.main" }}
            >
              {!form.avatar && initials}
            </Avatar>

            <Button component="label" variant="outlined">
              Upload Photo
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    setForm({ ...form, avatar: reader.result });
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <TextField
              label="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <TextField
              label="Status"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
