const queries = require('./queries');
const { client } = require('./database');

async function runQueries() {
  console.log('Running Hospital Database Queries:');
  
  await queries.getCompletedVisits();
  await queries.getAvailableAmbulances();
  await queries.getExamRoomUsage();
  await queries.getCashPayments();
  await queries.getAllDoctors();
  
  client.close();
  console.log('Database connection closed');
}

runQueries().catch(console.error);
