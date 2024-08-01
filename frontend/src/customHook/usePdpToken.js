import axios from 'axios';
import { clientId,grantType,clientSecret,tokenUrl } from '../utils/ApiList/axiosapi';

// Function to fetch access token
const usePdpToken = async ( ) => {
 // const tokenUrl = 'https://api.ciq3kgmonc-honeywell1-d3-public.model-t.cc.commerce.ondemand.com/authorizationserver/oauth/token';
  

  const data = new URLSearchParams();
  data.append('grant_type', grantType);
  data.append('client_id', clientId);
  data.append('client_secret', clientSecret);

  try {
    const response = await axios.post(tokenUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('Access token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }

 
};

export default usePdpToken;