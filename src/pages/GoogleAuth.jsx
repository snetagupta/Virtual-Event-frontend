import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const GOOGLE_SUCCESS_URL = import.meta.env.VITE_GOOGLE_SUCCESS_URL;

const GoogleAuth = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get(GOOGLE_SUCCESS_URL, {
        withCredentials: true,
      });

      // Check for the correct response status
      if (response.status === 200) {
        // Store user data in localStorage
        localStorage.setItem(
          'eventify_user',
          JSON.stringify(response.data.data)
        );

        // Navigate to the homepage or any specific route
        navigate('/');

        // Optional: Reload the page to reflect user authentication state
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : 'An error occurred';

      // Navigate to the login page on failure
      navigate('/login');
      window.location.reload();
    }
  };

  useEffect(() => {
    getUser(); // Call the function to get the authenticated user on component mount
  }, []);

  return <div>Loading...</div>;
};

export default GoogleAuth;
