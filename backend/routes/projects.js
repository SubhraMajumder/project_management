// routes/projects.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all projects
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Add new project
router.post('/', async (req, res) => {
  const { name, status, description, start_date, end_date } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO projects (name, status, description, start_date, end_date) VALUES (?, ?, ?, ?, ?)',
      [name, status, description, start_date, end_date]
    );
    res.status(201).json({ id: result.insertId, name, status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding project' });
  }
});

module.exports = router;
