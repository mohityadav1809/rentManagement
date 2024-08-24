import React, { useState } from 'react';
import './App.css';

function App() {
  const [tenantName, setTenantName] = useState('');
  const [fixedRent, setFixedRent] = useState(0);
  const [electricityCharges, setElectricityCharges] = useState(0);
  const [waterCharges, setWaterCharges] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [totalRent, setTotalRent] = useState(0);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!tenantName.trim()) {
      setError('Tenant name is required.');
      return false;
    }
    if (fixedRent < 0 || electricityCharges < 0 || waterCharges < 0 || maintenance < 0) {
      setError('Rent, electricity, water, and maintenance charges must be non-negative.');
      return false;
    }
    setError(''); // Clear any existing error
    return true;
  };

  const calculateTotalRent = () => {
    if (validateInputs()) {
      const total = parseFloat(fixedRent) + parseFloat(electricityCharges) + parseFloat(waterCharges) + parseFloat(maintenance);
      setTotalRent(total);
    }
  };

  const resetData = () => {
    setTenantName('');
    setFixedRent(0);
    setElectricityCharges(0);
    setWaterCharges(0);
    setMaintenance(0);
    setTotalRent(0);
    setError(''); // Clear any existing error
  };

  return (
    <div className="container">
      <h2>Rent Calculator</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label>Tenant Name: </label>
        <input
          type="text"
          value={tenantName}
          onChange={(e) => setTenantName(e.target.value)}
          placeholder="Enter tenant name"
        />
      </div>
      <div className="form-group">
        <label>Fixed Rent: </label>
        <input
          type="number"
          value={fixedRent}
          onChange={(e) => setFixedRent(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Electricity Charges: </label>
        <input
          type="number"
          value={electricityCharges}
          onChange={(e) => setElectricityCharges(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Water Charges: </label>
        <input
          type="number"
          value={waterCharges}
          onChange={(e) => setWaterCharges(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Maintenance: </label>
        <input
          type="number"
          value={maintenance}
          onChange={(e) => setMaintenance(e.target.value)}
        />
      </div>
      <button
        onClick={calculateTotalRent}
        className="calculate-button"
      >
        Calculate Total Rent
      </button>
      <button
        onClick={resetData}
        className="reset-button"
      >
        Reset
      </button>
      <h3>Total Rent: {totalRent}</h3>
    </div>
  );
}

export default App;
