import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    room_number: '',
    description: '',
    room_type: 'Exam'
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await fetch(`${API_URL}/api/rooms`);
    const data = await res.json();
    setRooms(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`${API_URL}/api/rooms/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch(`${API_URL}/api/rooms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData({ room_number: '', description: '', room_type: 'Exam' });
    setShowForm(false);
    setEditId(null);
    fetchRooms();
  };

  const handleEdit = (room) => {
    setFormData({
      room_number: room.room_number,
      description: room.description,
      room_type: room.room_type
    });
    setEditId(room._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this room?')) {
      await fetch(`${API_URL}/api/rooms/${id}`, { method: 'DELETE' });
      fetchRooms();
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>🏥 Detection Rooms</h2>
        <button className="btn-add" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Room'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Room Number (e.g., R-101)"
            value={formData.room_number}
            onChange={(e) => setFormData({ ...formData, room_number: e.target.value })}
            required
          />
          <input
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <select
            value={formData.room_type}
            onChange={(e) => setFormData({ ...formData, room_type: e.target.value })}
          >
            <option value="Exam">Exam</option>
            <option value="ECG">ECG</option>
            <option value="Radiology">Radiology</option>
            <option value="ER">ER</option>
          </select>
          <button type="submit" className="btn-submit">
            {editId ? 'Update' : 'Add'}
          </button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Description</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room._id}>
              <td>{room.room_number}</td>
              <td>{room.description}</td>
              <td>{room.room_type}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(room)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(room._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
