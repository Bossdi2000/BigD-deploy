"use client";

import React, { useState } from "react";
import { TextField, Button, Typography, Container, CircularProgress, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProfileForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Client-side validation
    if (!name.trim() || !role.trim() || !quote.trim()) {
      setError("Name, role, and quote are required.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("role", role.trim());
      formData.append("quote", quote.trim());
      if (image) formData.append("image", image);

      const response = await axios.post("http://localhost:5000/api/gallery/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Profile submitted successfully!");
      setTimeout(() => {
        navigate("/user-gallery");
      }, 1500);
    } catch (err) {
      console.error("Submission error:", err);
      if (err.response) {
        // Backend responded with an error
        setError(err.response.data.error || "Failed to submit profile. Please try again.");
      } else if (err.request) {
        // No response from backend
        setError("Unable to reach the server. Please check your connection or try again later.");
      } else {
        // Other errors
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Add Your Profile
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          required
        />
        <TextField
          label="Role"
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          disabled={loading}
          required
        />
        <TextField
          label="Quote"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          disabled={loading}
          required
        />
        <Button
          variant="outlined"
          component="label"
          sx={{ mt: 2, mb: 2 }}
          disabled={loading}
        >
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Button>
        {image && <Typography variant="body2">{image.name}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Container>
  );
};

export default AddProfileForm;