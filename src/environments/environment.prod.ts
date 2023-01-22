

const SERVER_URL = 'http://ec2-3-110-127-193.ap-south-1.compute.amazonaws.com:8080/api';

export const environment = {
  production: true,

  API_AUTHENTICATEUSER: `${SERVER_URL}/auth/login`,
  API_GETUSERDATA: `${SERVER_URL}/user`,
};
