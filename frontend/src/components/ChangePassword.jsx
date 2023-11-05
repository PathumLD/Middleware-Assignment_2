import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password change logic and validation here
    // You can use the `formData` state to access the entered values.
    // Check if the new password and confirm new password match.
    // Update the errors state if there are validation issues.
    // If the password change is successful, set the successMessage state.
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative">
        <img src={logo} alt="Logo" className="w-36 h-36 absolute top-4 left-4" />
      <Link to="/home" className="absolute top-4 right-4 text-indigo-600">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Change Password</h1>
      <form onSubmit={handleSubmit} className="max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-gray-700 font-semibold">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 font-semibold">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 focus-border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmNewPassword" className="block text-gray-700 font-semibold">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded-md border border-gray-300 focus-border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Change Password
        </button>
        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
        {errors &&
          Object.keys(errors).map((errorKey) => (
            <p key={errorKey} className="text-red-600 mt-2">
              {errors[errorKey]}
            </p>
          ))}
      </form>
    </div>
  );
}
