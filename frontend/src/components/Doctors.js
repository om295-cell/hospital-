import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    national_id: '',
    full_name: '',
    work_hours: '',
    specialty: ''
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const res = await fetch(`${API_URL}/api/doctors`);
    const data = await res.json();
    setDoctors(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`${API_URL}/api/doctors/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch(`${API_URL}/api/doctors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData({ national_id: '', full_name: '', work_hours: '', specialty: '' });
    setShowForm(false);
    setEditId(null);
    fetchDoctors();
  };

  const handleEdit = (doctor) => {
    setFormData({
      national_id: doctor.national_id,
      full_name: doctor.full_name,
      work_hours: doctor.work_hours,
      specialty: doctor.specialty
    });
    setEditId(doctor._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this doctor?')) {
      await fetch(`${API_URL}/api/doctors/${id}`, { method: 'DELETE' });
      fetchDoctors();
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>👨⚕️ Doctors</h2>
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Doctor'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="National ID"
            value={formData.national_id}
            onChange={(e) => setFormData({ ...formData, national_id: e.target.value })}
            required
          />
          <input
            placeholder="Full Name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            required
          />
          <input
            placeholder="Work Hours (e.g., 08:00-16:00)"
            value={formData.work_hours}
            onChange={(e) => setFormData({ ...formData, work_hours: e.target.value })}
            required
          />
          <input
            placeholder="Specialty"
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            required
          />
          <button type="submit" className="btn-submit">
            {editId ? 'Update' : 'Add'}
          </button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>National ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Work Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>{doctor.national_id}</td>
              <td>{doctor.full_name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.work_hours}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(doctor)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(doctor._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Doctors;
