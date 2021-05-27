const axios = require('axios');

const Router = axios.create({
  baseURL: 'https://api-airdady.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

const client = {
  otp: {
    keys: (keys) => {
      return {
        generate: ({ to }) => {
          return Router.post(`/otp/generate/${to}?keys=${keys}`);
        },
        verify: ({ otp_id, otp_code }) => {
          return Router.post(`/otp/verify/${otp_id}/${otp_code}?keys=${keys}`);
        },
        resend: ({ otp_id }) => {
          return Router.post(`/otp/resend/${otp_id}?keys=${keys}`);
        },
      };
    },
  },
};

export default client;
