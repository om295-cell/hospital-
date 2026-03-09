import React from 'react';

const doctors = [
  { id: 1, name: 'Dr. Ahmed Hassan', specialty: 'Cardiology', hours: '08:00-16:00' },
  { id: 2, name: 'Dr. Mohamed Ali', specialty: 'Neurology', hours: '09:00-17:00' },
  { id: 3, name: 'Dr. Youssef Ibrahim', specialty: 'Orthopedics', hours: '08:00-14:00' },
  { id: 4, name: 'Dr. Fatma Khaled', specialty: 'Dermatology', hours: '10:00-18:00' },
  { id: 5, name: 'Dr. Omar Mahmoud', specialty: 'ENT', hours: '08:00-16:00' },
  { id: 6, name: 'Dr. Nour El Din', specialty: 'Ophthalmology', hours: '09:00-17:00' },
  { id: 7, name: 'Dr. Khaled Mostafa', specialty: 'General Medicine', hours: '08:00-16:00' },
  { id: 8, name: 'Dr. Sara Abdelrahman', specialty: 'Radiology', hours: '11:00-19:00' },
  { id: 9, name: 'Dr. Mahmoud Farouk', specialty: 'Pediatrics', hours: '08:00-14:00' },
  { id: 10, name: 'Dr. Lina Yassin', specialty: 'Internal Medicine', hours: '09:00-17:00' }
];

function Doctors() {
  return (
    <div className="card">
      <h2>👨‍⚕️ Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Work Hours</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Doctors;
