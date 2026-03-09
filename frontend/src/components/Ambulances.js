import React from 'react';

const ambulances = [
  { id: 1, plate: 'AMB-001', status: 'available', nurse: 'Aisha Hassan' },
  { id: 2, plate: 'AMB-002', status: 'available', nurse: 'Mariam Said' },
  { id: 3, plate: 'AMB-003', status: 'maintenance', nurse: 'Huda Ahmed' },
  { id: 4, plate: 'AMB-004', status: 'available', nurse: 'Rania Fawzy' },
  { id: 5, plate: 'AMB-005', status: 'available', nurse: 'Salma Nabil' },
  { id: 6, plate: 'AMB-006', status: 'busy', nurse: 'Hassan Adel' },
  { id: 7, plate: 'AMB-007', status: 'available', nurse: 'Nada Samir' },
  { id: 8, plate: 'AMB-008', status: 'busy', nurse: 'Yasmin Tarek' },
  { id: 9, plate: 'AMB-009', status: 'available', nurse: 'Reem Anwar' },
  { id: 10, plate: 'AMB-010', status: 'available', nurse: 'Mostafa Amin' }
];

function Ambulances() {
  return (
    <div className="card">
      <h2>🚑 Ambulances</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Plate Number</th>
            <th>Status</th>
            <th>Assigned Nurse</th>
          </tr>
        </thead>
        <tbody>
          {ambulances.map(ambulance => (
            <tr key={ambulance.id}>
              <td>{ambulance.id}</td>
              <td>{ambulance.plate}</td>
              <td><span className={`badge ${ambulance.status}`}>{ambulance.status}</span></td>
              <td>{ambulance.nurse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ambulances;
