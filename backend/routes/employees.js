// routes/employees.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching employees' });
  }
});

// Add new employee
router.post('/', async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
      [name, email, role]
    );
    res.status(201).json({ id: result.insertId, name, email, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding employee' });
  }
});

module.exports = router;
