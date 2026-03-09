const express = require('express');
const cors = require('cors');
const { connectDB, client } = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/doctors', async (req, res) => {
  const db = await connectDB();
  const doctors = await db.collection('doctors').find({}).toArray();
  res.json(doctors);
});

app.get('/api/patients', async (req, res) => {
  const db = await connectDB();
  const patients = await db.collection('patients').find({}).toArray();
  res.json(patients);
});

app.get('/api/visits', async (req, res) => {
  const db = await connectDB();
  const visits = await db.collection('visits').find({}).toArray();
  res.json(visits);
});

app.get('/api/ambulances', async (req, res) => {
  const db = await connectDB();
  const ambulances = await db.collection('ambulances').find({}).toArray();
  res.json(ambulances);
});

app.get('/api/rooms', async (req, res) => {
  const db = await connectDB();
  const rooms = await db.collection('detection_rooms').find({}).toArray();
  res.json(rooms);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
