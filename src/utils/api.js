// utils/api.js
import axios from 'axios';

const apiCall = async (method, url, data = null) => {
  const config = {
    method: method.toLowerCase(),
    url,
    data,
  };

  const response = await axios(config);
  return response.data;
};

export default apiCall;
