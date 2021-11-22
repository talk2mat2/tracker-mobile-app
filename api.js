import axios from 'axios';
const ApiUrl = 'https://reqres.in/api';

const Api = {
  login: async params => {
    return await axios
      .post(ApiUrl + '/login', params)
      .then(Response => {
        return Response.data;
      })
      .catch(err => {
        throw err.response.data;
      });
  },

  fetchUsers: async token => {
    return await axios
      .get(ApiUrl + '/users?page=1', {
        headers: {Authurization: `Bearer ${token}`},
      })
      .then(response => {
    
        return response.data;
      })
      .catch(err => {
        throw err.response.data;
      });
  },
};

export default Api;
