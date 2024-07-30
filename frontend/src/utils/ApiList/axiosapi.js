 

 
const  baseurl = "";
const contactApi = baseurl + "/.netlify/functions/apis/pif/api/account/v1/get-contact-details?appId=239"
const detailsApi = baseurl + "/.netlify/functions/apis/pif/api/session/details?appId=239";
const toolsApi = baseurl + "/.netlify/functions/apis/pif/api/tools/v1/get-tools?appId=239";
const refreshApi = baseurl + "/.netlify/functions/apis/pif/api/session/refresh?appId=239";
const userApi = baseurl + "/.netlify/functions/apis/pif/api/user/v1/get-user?appId=239";
const statusApi = baseurl + "/.netlify/functions/apis/pif/api/status/v1/get-status?appId=239";

const productdetailApi = "https://dummyjson.com/c/c798-bc76-46d3-aa9e";
const productpriceApi = "https://dummyjson.com/c/3874-ddca-4cd1-814b";
const atpApi = "https://dummyjson.com/c/2726-894c-4fa5-ba7b";


export { contactApi, detailsApi, toolsApi, refreshApi, userApi, statusApi, productdetailApi, productpriceApi, atpApi };   


