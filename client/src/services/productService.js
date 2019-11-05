import axios from 'axios';
let token = localStorage.getItem('token');

export default {
  getAll: async (y, m) => {
    if (!token) {
      token = await getToken();
    }
    let res = await axios.get(`http://localhost:5000/api/doodle/${y}/${m}`, {
      headers: {
        'x-access-token': token
      }
    });
    return res.data || [];
  }
};
const getToken = async () => {
  let res = await axios.get(`http://localhost:5000/api/auth`);
  localStorage.setItem('token', res.data);
  return res.data;
};
