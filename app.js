// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route for handling HTTP GET requests
app.get('/api/hello', (req, res) => {
  // Send a JSON response with a greeting message
  res.json({ message: 'Hello from the server!' });
});

// Define a route for handling HTTP POST requests
app.post('/api/data', (req, res) => {
  // Process the incoming data
  // For demonstration purposes, just send a success message
  res.json({ message: 'Data received successfully!' });
});

// Define a route for handling other HTTP requests (404 Not Found)
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Export the Express app
module.exports = app;
