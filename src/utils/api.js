import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const sendContactMessage = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Failed to send message.');
    }
    throw new Error('Network error or server unreachable.');
  }
};

export const checkServerHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch {
    return { status: 'offline' };
  }
};

export default api;
