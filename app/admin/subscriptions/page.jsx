'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Page() {
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  // Fetch subscribed emails
  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/email');
      setSubscribedEmails(response.data.emails); // Assuming response.data.emails is an array of objects
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-lg w-full h-full">
        <h2 className="text-2xl font-bold text-left mb-6">Subscribers</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <tbody>
            {subscribedEmails.map((emailObject) => (
              <tr key={emailObject._id}> {/* Use _id as a key */}
                <td className="py-2 px-4 border-b border-gray-200">{emailObject.email}</td> {/* Render the email field */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
