import React, { useState } from 'react';
import './App.css';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Visits from './components/Visits';
import Ambulances from './components/Ambulances';
import Rooms from './components/Rooms';

function App() {
  const [activeTab, setActiveTab] = useState('doctors');

  return (
    <div className="App">
      <header>
        <h1>🏥 Hospital Management System</h1>
      </header>
      
      <nav>
        <button onClick={() => setActiveTab('doctors')} className={activeTab === 'doctors' ? 'active' : ''}>
          Doctors
        </button>
        <button onClick={() => setActiveTab('patients')} className={activeTab === 'patients' ? 'active' : ''}>
          Patients
        </button>
        <button onClick={() => setActiveTab('visits')} className={activeTab === 'visits' ? 'active' : ''}>
          Visits
        </button>
        <button onClick={() => setActiveTab('ambulances')} className={activeTab === 'ambulances' ? 'active' : ''}>
          Ambulances
        </button>
        <button onClick={() => setActiveTab('rooms')} className={activeTab === 'rooms' ? 'active' : ''}>
          Rooms
        </button>
      </nav>

      <main>
        {activeTab === 'doctors' && <Doctors />}
        {activeTab === 'patients' && <Patients />}
        {activeTab === 'visits' && <Visits />}
        {activeTab === 'ambulances' && <Ambulances />}
        {activeTab === 'rooms' && <Rooms />}
      </main>
    </div>
  );
}

export default App;
