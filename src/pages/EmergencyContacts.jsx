// src/pages/EmergencyContacts.jsx
import React from 'react';

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
    <div className="bg-red-500 text-white py-2 overflow-hidden">
      <marquee>
        {contacts.map((contact, index) => (
          <span key={index} className="mr-4">
            <strong>{contact.name}:</strong> {contact.number}
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default EmergencyContacts;
