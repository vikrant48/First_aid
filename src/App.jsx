import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import EmergencyContacts from './pages/EmergencyContacts';
import NearbyHospitals from './pages/NearbyHospitals';

const App = () => {
  return (
    <div className="app">
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/guide">First Aid Guide</Link>
        <Link className="hover:underline" to="/nearby">Nearby Hospitals</Link>
      </nav>
      {/* <div className="bg-red-500 text-white py-2 overflow-hidden">
        <marquee>
          <EmergencyContacts />
        </marquee>
      </div> */}
      <EmergencyContacts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/nearby" element={<NearbyHospitals />} />
      </Routes>
    </div>
  );
};

export default App;
