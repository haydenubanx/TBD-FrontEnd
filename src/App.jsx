import React, { useState } from 'react';
import PermissionScreen from './components/PermissionScreen';
import BankingDashboard from './components/BankingDashboard';

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  const handlePermissionGranted = () => {
    setPermissionGranted(true);
  };

  return (
    <div className="App">
      {!permissionGranted ? (
        <PermissionScreen onAllow={handlePermissionGranted} />
      ) : (
        <BankingDashboard />
      )}
    </div>
  );
}

export default App;