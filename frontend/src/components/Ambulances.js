import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Ambulances() {
  const [ambulances, setAmbulances] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    plate_number: '',
    status: 'available',
    default_nurse: ''
  });

  useEffect(() => {
    fetchAmbulances();
  }, []);

  const fetchAmbulances = async () => {
    const res = await fetch(`${API_URL}/api/ambulances`);
    const data = await res.json();
    setAmbulances(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`${API_URL}/api/ambulances/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch(`${API_URL}/api/ambulances`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData({ plate_number: '', status: 'available', default_nurse: '' });
    setShowForm(false);
    setEditId(null);
    fetchAmbulances();
  };

  const handleEdit = (ambulance) => {
    setFormData({
      plate_number: ambulance.plate_number,
      status: ambulance.status,
      default_nurse: ambulance.default_nurse
    });
    setEditId(ambulance._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this ambulance?')) {
      await fetch(`${API_URL}/api/ambulances/${id}`, { method: 'DELETE' });
      fetchAmbulances();
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>🚑 Ambulances</h2>
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Ambulance'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Plate Number (e.g., AMB-001)"
            value={formData.plate_number}
            onChange={(e) => setFormData({ ...formData, plate_number: e.target.value })}
            required
          />
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="maintenance">Maintenance</option>
          </select>
          <input
            placeholder="Assigned Nurse"
            value={formData.default_nurse}
            onChange={(e) => setFormData({ ...formData, default_nurse: e.target.value })}
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
            <th>Plate Number</th>
            <th>Status</th>
            <th>Assigned Nurse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ambulances.map(ambulance => (
            <tr key={ambulance._id}>
              <td>{ambulance.plate_number}</td>
              <td><span className={`badge ${ambulance.status}`}>{ambulance.status}</span></td>
              <td>{ambulance.default_nurse}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(ambulance)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(ambulance._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ambulances;
