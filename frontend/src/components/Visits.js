import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Visits() {
  const [visits, setVisits] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    patient_name: '',
    doctor_name: '',
    nurse_name: '',
    visit_type: 'scheduled',
    status: 'in_progress',
    reason: ''
  });

  useEffect(() => {
    fetchVisits();
  }, []);

  const fetchVisits = async () => {
    const res = await fetch(`${API_URL}/api/visits`);
    const data = await res.json();
    setVisits(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`${API_URL}/api/visits/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch(`${API_URL}/api/visits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData({ patient_name: '', doctor_name: '', nurse_name: '', visit_type: 'scheduled', status: 'in_progress', reason: '' });
    setShowForm(false);
    setEditId(null);
    fetchVisits();
  };

  const handleEdit = (visit) => {
    setFormData({
      patient_name: visit.patient_name,
      doctor_name: visit.doctor_name,
      nurse_name: visit.nurse_name,
      visit_type: visit.visit_type,
      status: visit.status,
      reason: visit.reason
    });
    setEditId(visit._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this visit?')) {
      await fetch(`${API_URL}/api/visits/${id}`, { method: 'DELETE' });
      fetchVisits();
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>📋 Visits</h2>
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Visit'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Patient Name"
            value={formData.patient_name}
            onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
            required
          />
          <input
            placeholder="Doctor Name"
            value={formData.doctor_name}
            onChange={(e) => setFormData({ ...formData, doctor_name: e.target.value })}
            required
          />
          <input
            placeholder="Nurse Name"
            value={formData.nurse_name}
            onChange={(e) => setFormData({ ...formData, nurse_name: e.target.value })}
            required
          />
          <select
            value={formData.visit_type}
            onChange={(e) => setFormData({ ...formData, visit_type: e.target.value })}
          >
            <option value="scheduled">Scheduled</option>
            <option value="emergency">Emergency</option>
          </select>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input
            placeholder="Reason"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
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
            <th>Patient</th>
            <th>Doctor</th>
            <th>Nurse</th>
            <th>Type</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visits.map(visit => (
            <tr key={visit._id}>
              <td>{visit.patient_name}</td>
              <td>{visit.doctor_name}</td>
              <td>{visit.nurse_name}</td>
              <td>{visit.visit_type}</td>
              <td><span className={`badge ${visit.status}`}>{visit.status}</span></td>
              <td>{visit.reason}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(visit)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(visit._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Visits;
