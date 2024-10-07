import axios from 'axios';

async function fetchUsers() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        'Server responded with a status code outside the range of 2xx:',
        error.response.status
      );
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error in setting up the request:', error.message);
    }
    return [];
  }
}

export default fetchUsers;
