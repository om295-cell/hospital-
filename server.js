const express = require('express');
const cors = require('cors');
const { connectDB, client } = require('./database');
const { ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Doctors Routes
app.get('/api/doctors', async (req, res) => {
  const db = await connectDB();
  const doctors = await db.collection('doctors').find({}).toArray();
  res.json(doctors);
});

app.post('/api/doctors', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('doctors').insertOne(req.body);
  res.json(result);
});

app.put('/api/doctors/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('doctors').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

app.delete('/api/doctors/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('doctors').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

// Patients Routes
app.get('/api/patients', async (req, res) => {
  const db = await connectDB();
  const patients = await db.collection('patients').find({}).toArray();
  res.json(patients);
});

app.post('/api/patients', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('patients').insertOne(req.body);
  res.json(result);
});

app.put('/api/patients/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('patients').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

app.delete('/api/patients/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('patients').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

// Visits Routes
app.get('/api/visits', async (req, res) => {
  const db = await connectDB();
  const visits = await db.collection('visits').find({}).toArray();
  res.json(visits);
});

app.post('/api/visits', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('visits').insertOne(req.body);
  res.json(result);
});

app.put('/api/visits/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('visits').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

app.delete('/api/visits/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('visits').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

// Ambulances Routes
app.get('/api/ambulances', async (req, res) => {
  const db = await connectDB();
  const ambulances = await db.collection('ambulances').find({}).toArray();
  res.json(ambulances);
});

app.post('/api/ambulances', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('ambulances').insertOne(req.body);
  res.json(result);
});

app.put('/api/ambulances/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('ambulances').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

app.delete('/api/ambulances/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('ambulances').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

// Rooms Routes
app.get('/api/rooms', async (req, res) => {
  const db = await connectDB();
  const rooms = await db.collection('detection_rooms').find({}).toArray();
  res.json(rooms);
});

app.post('/api/rooms', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('detection_rooms').insertOne(req.body);
  res.json(result);
});

app.put('/api/rooms/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('detection_rooms').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

app.delete('/api/rooms/:id', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('detection_rooms').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
