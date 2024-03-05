import api from '../api';

export async function fetchApartments() {
  try {
    const result = await api.get('/apartments');
    console.log('Fetched apartment data');
    return result.data;
  } catch (err) {
    console.log('Error occurred when fetching apartments:', err);
  }
}
