const { connectDB } = require('./database');

// 1. Get all completed visits
async function getCompletedVisits() {
  const db = await connectDB();
  const visits = await db.collection('visits').find({ status: 'completed' }).toArray();
  console.log('Completed Visits:');
  console.log(visits);
  return visits;
}

// 2. Get available ambulances
async function getAvailableAmbulances() {
  const db = await connectDB();
  const ambulances = await db.collection('ambulances').find({ status: 'available' }).toArray();
  console.log(' Available Ambulances:');
  console.log(ambulances);
  return ambulances;
}

// 3. Get exam room usage
async function getExamRoomUsage() {
  const db = await connectDB();
  const rooms = await db.collection('detection_rooms').find({ room_type: 'Exam' }).toArray();
  const roomNumbers = rooms.map(r => r.room_number);
  const usage = await db.collection('room_usage').find({ room_number: { $in: roomNumbers } }).toArray();
  console.log('Exam Room Usage:');
  console.log(usage);
  return usage;
}

// 4. Get cash payments
async function getCashPayments() {
  const db = await connectDB();
  const payments = await db.collection('payments').find({ payment_method: 'Cash' }).toArray();
  console.log('Cash Payments:');
  console.log(payments);
  return payments;
}

// 5. Get all doctors
async function getAllDoctors() {
  const db = await connectDB();
  const doctors = await db.collection('doctors').find({}).toArray();
  console.log('All Doctors:');
  console.log(doctors);
  return doctors;
}

module.exports = {
  getCompletedVisits,
  getAvailableAmbulances,
  getExamRoomUsage,
  getCashPayments,
  getAllDoctors
};
