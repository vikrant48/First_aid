import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import EmergencyContacts from './pages/EmergencyContacts';
import NearbyHospitals from './pages/NearbyHospitals';
import QuickTips from './pages/QuickTips';
import FirstAidKits from './pages/FirstAidKits';
import TrainingResources from './pages/TrainingResources';
import logo from './assets/logo.png'

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="app">
      <nav className='p-4 shadow-md bg-gray-800 text-white'>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="text-lg font-bold">FirstAid+</h1>
          </div>

          <div className="hidden md:block text-center">
            <h1 className="text-xl font-semibold">Your Guide</h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              className="hover:underline hover:text-blue-400"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:underline hover:text-blue-400"
              to="/guide"
            >
              First Aid Guide
            </Link>
            <Link
              className="hover:underline hover:text-blue-400"
              to="/nearby"
            >
              Nearby Hospitals
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            <Link
              className="block hover:underline hover:text-blue-400"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block hover:underline hover:text-blue-400"
              to="/guide"
            >
              First Aid Guide
            </Link>
            <Link
              className="block hover:underline hover:text-blue-400"
              to="/nearby"
            >
              Nearby Hospitals
            </Link>
          </div>
        )}
      </nav>
      <div className="bg-red-500 text-white py-2 overflow-hidden">
        <marquee>
          Emergency Contacts:
          Ambulance: 102 |
          Police: 100 |
          Fire Brigade: 101 |
          Blood Bank: 104 |
          National Emergency Number: 112
        </marquee>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/nearby" element={<NearbyHospitals />} />
        <Route path="/quick-tips" element={<QuickTips />} />
        <Route path="/interactive-procedures" element={<Guide />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/locate-hospitals" element={<NearbyHospitals />} />
        <Route path="/first-aid-kits" element={<FirstAidKits />} />
        <Route path="/training-resources" element={<TrainingResources />} />
      </Routes>
    </div>
  );
};

export default App;
