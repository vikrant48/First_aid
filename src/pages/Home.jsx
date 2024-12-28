import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home bg-blue-50 min-h-screen">
      <div className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Welcome to the First Aid Guide
        </h1>
        <p className="text-lg md:text-xl font-light">
          Learn quick and effective first aid procedures to save lives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
        <Link
          to="/quick-tips"
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Quick First Aid Tips
          </h2>
          <p className="text-gray-700">
            Access essential first aid tips to handle emergencies effectively.
          </p>
        </Link>

        <Link
          to="/interactive-procedures"
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Interactive Procedures
          </h2>
          <p className="text-gray-700">
            Follow step-by-step guides with visuals to provide effective aid.
          </p>
        </Link>

        <Link
          to="/emergency-contacts"
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Emergency Contacts
          </h2>
          <p className="text-gray-700">
            Keep emergency numbers at your fingertips for quick assistance.
          </p>
        </Link>

        <Link
          to="/locate-hospitals"
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Locate Hospitals
          </h2>
          <p className="text-gray-700">
            Find nearby hospitals and pharmacies during critical situations.
          </p>
        </Link>

        <Link
          to="/first-aid-kits"
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            First Aid Kits
          </h2>
          <p className="text-gray-700">
            Learn how to assemble and use a comprehensive first aid kit.
          </p>
        </Link>

        <Link
          to="/training-resources"
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            Training Resources
          </h2>
          <p className="text-gray-700">
            Access resources to enhance your first aid knowledge and skills.
          </p>
        </Link>
      </div>

      <footer className="bg-gray-600 text-white py-4 mt-8 text-center">
        <p className="text-sm">
        &copy; {new Date().getFullYear()} First Aid Guide. All rights reserved. <br />
        Designed by <span className="font-bold">Vikrant Chauhan</span>.
        </p>
      </footer>
    </div>
  );
};

export default Home;
