import React from 'react';

const patients = [
  { id: 1, name: 'Ali Mohamed', phone: '555-1111', gender: 'Male', history: 'Hypertension' },
  { id: 2, name: 'Fatma Abdelaziz', phone: '555-1112', gender: 'Female', history: 'Diabetes' },
  { id: 3, name: 'Hussein Ramadan', phone: '555-1113', gender: 'Male', history: 'Asthma' },
  { id: 4, name: 'Mona Saeed', phone: '555-1114', gender: 'Female', history: 'None' },
  { id: 5, name: 'Ibrahim Hassan', phone: '555-1115', gender: 'Male', history: 'Heart disease' },
  { id: 6, name: 'Dina Mahmoud', phone: '555-1116', gender: 'Female', history: 'Allergies' },
  { id: 7, name: 'Yasser Khalil', phone: '555-1117', gender: 'Male', history: 'Migraine' },
  { id: 8, name: 'Amal Farid', phone: '555-1118', gender: 'Female', history: 'Arthritis' },
  { id: 9, name: 'Tamer Adel', phone: '555-1119', gender: 'Male', history: 'High cholesterol' },
  { id: 10, name: 'Rasha Nasser', phone: '555-1120', gender: 'Female', history: 'Anemia' }
];

function Patients() {
  return (
    <div className="card">
      <h2>🧑‍🤝‍🧑 Patients</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Medical History</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.phone}</td>
              <td>{patient.gender}</td>
              <td>{patient.history}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
