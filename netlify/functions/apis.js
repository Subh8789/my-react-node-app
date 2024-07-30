
// Utility function to parse cookies
const parseCookies = (cookieString) => {
  return cookieString
    .split(';')
    .map(cookie => cookie.trim())
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});
};

exports.handler = async (event, context) => {
  const { path, queryStringParameters, httpMethod, headers, body } = event;
  const basePath = '/.netlify/functions/apis'; // Adjust this based on your setup
  const apiPath = path.replace(basePath, '');
  const queryString = new URLSearchParams(queryStringParameters).toString();
  const fullUrl = `${apiPath}${queryString ? '?' + queryString : ''}`;
   // Get cookies from the headers
   const cookies = event.headers.cookie ? parseCookies(event.headers.cookie) : {};
   // Access specific cookies
   const token = cookies["2391-token"] || "ewogICJ0eXAiIDogIkpXVCIsCiAgImFsZyIgOiAiUlMyNTYiCn0.ewogICJkb21haW4iIDogIjIzOTEiLAogICJhcHBJZCIgOiAiMjM5IiwKICAiaXNzIiA6ICJidWlsZGluZ3NidC5zdGFnZS5ob25leXdlbGwuY29tIiwKICAianRpIiA6ICI2NGZjZDhlZC0xYmM4LTQ0MGMtYTZmNy0wZjc2YWQzMTNiNWMiLAogICJzdWIiIDogIjY2OWY3ZjIwLTdmMzUtNGU5Yy04MTQ1LTJlYjc5MmExNTFjMyIsCiAgImlhdCIgOiAxNzIyMzM1OTc0LAogICJleHAiIDogMTcyMjMzNzc3NAp9.euaweADj_33PgywPj6-9Cyerws3dEM6x4fNbwmPKewPSX4eUFdUYeLUj2ABWueFeSWTxfv7neJU7Nn3-T2WEREGI5JK6L3K99AYD4dusmjWc74Wi0hvSbovPyZbNBnDGuNqvO70UyxScbntH4_R9pbNzRU2GbpTuAF1QQAK6Rw_BhfDKkgswArrEMQEJ9ULC4reqQBObtPgv4wg8uTAuS4QJLjWCmzSEnoUDojRlrAlEXHPl3a2etLoA5C_2kor4o4EZ-Ziy-K4vcF2sUrAd3BlEWYU7uOiWbE6kL9gFs-k-0FCZV9RJ5YzlLjX5pf2oNWL2gsD7rfi1YNLFFImj2Q";

  if (apiPath.includes("/pif/")) {
    if (httpMethod === 'OPTIONS') {
      // CORS Preflight
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        body: ''
      };
    } else {
      const targetURL = "https://qpublish-hbt.aws.aem.honeywell.com" + fullUrl;      
      const cookieVal = "2651-token=" + token;
      let requestData ; 
      if (typeof body === 'string') {
        try {
          requestData = JSON.parse(body);
        } catch (error) {
          console.error('Invalid JSON string:', body);
          requestData = {};
        }
      } else {
        requestData = body || {};
      }// Assuming the request body is JSON

      try {
        // Make an external API POST call
        const response = await fetch(targetURL, {
          method: httpMethod,
          headers: {
            'Authorization': "Bearer " + token,
            'Cookie': cookieVal
          },
          json: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Handle the response data
        console.log('Response data:', data);

        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(data)
        };

      } catch (error) {
        console.error('Fetch error:', error);
        return {
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
        };
      }
    }
  } else {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message: 'Not Found' })
    };
  }
};