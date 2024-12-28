import React, { useEffect, useState } from 'react';

const NearbyHospitals = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error fetching location:", error);
      }
    );
  }, []);

  const handleSearchNearby = () => {
    if (location) {
      const { latitude, longitude } = location;
      const googleMapsUrl = `https://www.google.com/maps/search/hospitals+or+medical+stores/@${latitude},${longitude},14z`;
      window.open(googleMapsUrl, '_blank');
    } else {
      alert('Location not available. Please allow location access.');
    }
  };

  return (
    <div className="nearby-hospitals p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Nearby Hospitals</h1>
      <p className="text-gray-600 mb-4">
        Click the button below to open Google Maps and search for nearby hospitals or medical stores.
      </p>
      <button
        onClick={handleSearchNearby}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search Nearby Hospitals
      </button>
    </div>
  );
};

export default NearbyHospitals;
