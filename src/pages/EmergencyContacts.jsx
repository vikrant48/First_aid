import React from "react";

const EmergencyContacts = () => {
  const contacts = [
    { name: "Ambulance", number: "102" },
    { name: "Police", number: "100" },
    { name: "Fire Brigade", number: "101" },
    { name: "Disaster Management", number: "108" },
    { name: "Women Helpline", number: "1091" },
    { name: "Child Helpline", number: "1098" },
    { name: "Road Accident Emergency", number: "1073" },
    { name: "Blood Bank", number: "104" },
    { name: "National Emergency Number", number: "112" },
    { name: "Suicide Helpline", number: "9152987821" },
  ];

  return (
    <div className="emergency-contacts bg-blue-50 min-h-screen p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Emergency Contacts
        </h1>
        <p className="text-gray-700 text-lg">
          Keep these numbers handy for any emergency situations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-bold text-blue-600">{contact.name}</h2>
            <p className="text-gray-700 mt-2">
              <strong>Number:</strong>{" "}
              <span className="text-blue-500 font-semibold">
                {contact.number}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
