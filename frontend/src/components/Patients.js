import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Patients() {
  const [patients, setPatients] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    national_id: '',
    full_name: '',
    phone: '',
    gender: 'Male',
    medical_history: ''
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const res = await fetch(`${API_URL}/api/patients`);
    const data = await res.json();
    setPatients(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`${API_URL}/api/patients/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch(`${API_URL}/api/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData({ national_id: '', full_name: '', phone: '', gender: 'Male', medical_history: '' });
    setShowForm(false);
    setEditId(null);
    fetchPatients();
  };

  const handleEdit = (patient) => {
    setFormData({
      national_id: patient.national_id,
      full_name: patient.full_name,
      phone: patient.phone,
      gender: patient.gender,
      medical_history: patient.medical_history
    });
    setEditId(patient._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this patient?')) {
      await fetch(`${API_URL}/api/patients/${id}`, { method: 'DELETE' });
      fetchPatients();
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>🧑🤝🧑 Patients</h2>
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Patient'}
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
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            placeholder="Medical History"
            value={formData.medical_history}
            onChange={(e) => setFormData({ ...formData, medical_history: e.target.value })}
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
            <th>Phone</th>
            <th>Gender</th>
            <th>Medical History</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient._id}>
              <td>{patient.national_id}</td>
              <td>{patient.full_name}</td>
              <td>{patient.phone}</td>
              <td>{patient.gender}</td>
              <td>{patient.medical_history}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(patient)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(patient._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
