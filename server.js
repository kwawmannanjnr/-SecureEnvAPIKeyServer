const express = require('express');
const app = express();
const PORT = 3001; // Choose any available port

// Define your API key
const apiKey = '15670403';

// Define your API endpoints
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to your API!' });
});

app.get('/api/apikey', (req, res) => {
    res.json({ apiKey });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

