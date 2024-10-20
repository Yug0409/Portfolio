// Contact.jsx
import React from 'react';

const CONTACT = {
  address: "Plot 11, Manglam Dwarika, Mahindra SEZ, Jaipur",
  phoneNo: "+917727082315",
  email1: "yugmittal2412@.com",
  email2: "yugmittal@jklu.edu.in"
};

const Contact = () => {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mt-8 mb-4">Contact Information</h2>
      <div className="mb-6 p-4 bg-gray-800 rounded-lg">
        <p className="mt-1">Address: {CONTACT.address}</p>
        <p className="mt-1">Phone: {CONTACT.phoneNo}</p>
        <p className="mt-1">
          Email 1: <a href={`mailto:${CONTACT.email1}`} className="text-blue-400 underline">{CONTACT.email1}</a>
        </p>
        <p className="mt-1">
          Email 2: <a href={`mailto:${CONTACT.email2}`} className="text-blue-400 underline">{CONTACT.email2}</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
