import React from 'react';

const Home = () => {
  return (
    <div className="home bg-gray-100 p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Welcome to the First Aid Guide</h1>
        <p className="text-lg text-gray-700">Learn quick and effective first aid procedures to save lives.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Quick First Aid Tips</h2>
          <p className="text-gray-600">Access essential first aid tips to handle emergencies effectively.</p>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Interactive Procedures</h2>
          <p className="text-gray-600">Follow step-by-step guides with visuals to provide effective aid.</p>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Emergency Contacts</h2>
          <p className="text-gray-600">Keep emergency numbers at your fingertips for quick assistance.</p>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Locate Hospitals</h2>
          <p className="text-gray-600">Find nearby hospitals and pharmacies during critical situations.</p>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">First Aid Kits</h2>
          <p className="text-gray-600">Learn how to assemble and use a comprehensive first aid kit.</p>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Training Resources</h2>
          <p className="text-gray-600">Access resources to enhance your first aid knowledge and skills.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;