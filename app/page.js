"use client";

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert, Tabs, Tab } from "@mui/material";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase"; // Adjust the path as needed
import { useRouter } from 'next/navigation'; // Use next/navigation for routing

export default function AuthPage() {
  const [tab, setTab] = useState(0); // 0 for login, 1 for register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      router.push("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful");
      router.push("/dashboard"); // Redirect to dashboard
      setTab(0); // Switch to login tab after successful registration
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="white"
      >
        <Typography variant="h4" gutterBottom>
          {tab === 0 ? "Finance Flow" : "Register"}
        </Typography>
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          aria-label="authentication tabs"
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <form onSubmit={tab === 0 ? handleLogin : handleRegister} style={{ width: "100%" }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Alert severity="error" style={{ marginBottom: "10px" }}>
              {errorMessage}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            {tab === 0 ? "Login" : "Register"}
          </Button>
          {tab === 0 && (
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              Don't have an account? <a href="#" onClick={() => setTab(1)}>Register</a>
            </Typography>
          )}
          {tab === 1 && (
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              Already have an account? <a href="#" onClick={() => setTab(0)}>Login</a>
            </Typography>
          )}
        </form>
      </Box>
    </Container>
  );
}
