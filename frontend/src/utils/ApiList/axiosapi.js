const baseurl = "";
const contactApi =
  baseurl + "/.netlify/functions/apis/pif/api/account/v1/get-contact-details?appId=239";
const detailsApi =
  baseurl + "/.netlify/functions/apis/pif/api/session/details?appId=239";
const toolsApi =
  baseurl + "/.netlify/functions/apis/pif/api/tools/v1/get-tools?appId=239";
const refreshApi =
  baseurl + "/.netlify/functions/apis/pif/api/session/refresh?appId=239";
const userApi =
  baseurl + "/.netlify/functions/apis/pif/api/user/v1/get-user?appId=239";
const statusApi =
  baseurl + "/.netlify/functions/apis/pif/api/status/v1/get-status?appId=239";


const tokenUrl =
  "https://api.ciq3kgmonc-honeywell1-d3-public.model-t.cc.commerce.ondemand.com/authorizationserver/oauth/token  ";

const getProductDetail =
baseurl +
"/.netlify/functions/apis/productDetails/productDescription";

const getPriceDetail =
baseurl +
  "/.netlify/functions/apis/productDetails/price";
const getAvailability =
baseurl +
  "/.netlify/functions/apis/productDetails/atp";

export {
  contactApi,
  detailsApi,
  toolsApi,
  refreshApi,
  userApi,
  statusApi,
  tokenUrl,
  getProductDetail,
  getPriceDetail,
  getAvailability,
};
