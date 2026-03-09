import React from 'react';

const rooms = [
  { id: 1, number: 'R-101', description: 'General examination', type: 'Exam' },
  { id: 2, number: 'R-102', description: 'Cardiology tests', type: 'ECG' },
  { id: 3, number: 'R-103', description: 'X-Ray room', type: 'Radiology' },
  { id: 4, number: 'R-104', description: 'MRI room', type: 'Radiology' },
  { id: 5, number: 'R-105', description: 'ENT examination', type: 'Exam' },
  { id: 6, number: 'R-106', description: 'Eye examination', type: 'Exam' },
  { id: 7, number: 'R-107', description: 'Emergency room', type: 'ER' },
  { id: 8, number: 'R-108', description: 'Orthopedic room', type: 'Exam' },
  { id: 9, number: 'R-109', description: 'Dermatology room', type: 'Exam' },
  { id: 10, number: 'R-110', description: 'Pediatrics room', type: 'Exam' }
];

function Rooms() {
  return (
    <div className="card">
      <h2>🏥 Detection Rooms</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Room Number</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.number}</td>
              <td>{room.description}</td>
              <td>{room.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
