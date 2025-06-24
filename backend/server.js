// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const employeeRoutes = require('./routes/employees');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.send('Project Management API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
