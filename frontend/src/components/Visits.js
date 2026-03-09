import React from 'react';

const visits = [
  { id: 1, patient: 'Ali Mohamed', doctor: 'Dr. Ahmed Hassan', type: 'scheduled', status: 'completed', reason: 'Routine checkup' },
  { id: 2, patient: 'Fatma Abdelaziz', doctor: 'Dr. Mohamed Ali', type: 'scheduled', status: 'in_progress', reason: 'Neurology consult' },
  { id: 3, patient: 'Hussein Ramadan', doctor: 'Dr. Youssef Ibrahim', type: 'emergency', status: 'completed', reason: 'Fracture' },
  { id: 4, patient: 'Mona Saeed', doctor: 'Dr. Fatma Khaled', type: 'scheduled', status: 'cancelled', reason: 'Skin rash' },
  { id: 5, patient: 'Ibrahim Hassan', doctor: 'Dr. Omar Mahmoud', type: 'emergency', status: 'completed', reason: 'ENT pain' },
  { id: 6, patient: 'Dina Mahmoud', doctor: 'Dr. Nour El Din', type: 'scheduled', status: 'completed', reason: 'Eye exam' },
  { id: 7, patient: 'Yasser Khalil', doctor: 'Dr. Khaled Mostafa', type: 'scheduled', status: 'in_progress', reason: 'General illness' },
  { id: 8, patient: 'Amal Farid', doctor: 'Dr. Sara Abdelrahman', type: 'scheduled', status: 'completed', reason: 'X-Ray' },
  { id: 9, patient: 'Tamer Adel', doctor: 'Dr. Mahmoud Farouk', type: 'scheduled', status: 'completed', reason: 'Child fever' },
  { id: 10, patient: 'Rasha Nasser', doctor: 'Dr. Lina Yassin', type: 'scheduled', status: 'completed', reason: 'Internal medicine' }
];

function Visits() {
  return (
    <div className="card">
      <h2>📋 Visits</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Type</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {visits.map(visit => (
            <tr key={visit.id}>
              <td>{visit.id}</td>
              <td>{visit.patient}</td>
              <td>{visit.doctor}</td>
              <td>{visit.type}</td>
              <td><span className={`badge ${visit.status}`}>{visit.status}</span></td>
              <td>{visit.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Visits;
