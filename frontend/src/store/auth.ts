import { createEffect, createStore } from 'effector';
import jwt from 'jsonwebtoken';
import axios from 'axios';

// Create an effect to handle the login API request
export const loginEffect = createEffect(async ({ username, password }) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    return response.data.token;
  } catch (error) {
    throw error.response.data;
  }
});

// Create a store to hold the JWT token
export const tokenStore = createStore('');

// Set the token in the store when the login effect is done
tokenStore.on(loginEffect.doneData, (_, token) => token);

// Function to set the JWT token in local storage
export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

// Function to get the JWT token from local storage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Function to remove the JWT token from local storage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  return token && !isTokenExpired(token);
};

// Function to check if the JWT token is expired
export const isTokenExpired = (token) => {
  const decoded = jwt.decode(token);
  return decoded && decoded.exp < Date.now() / 1000;
};
