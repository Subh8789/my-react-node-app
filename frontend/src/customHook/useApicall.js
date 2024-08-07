import React, { useEffect, useState } from "react";
import axios from 'axios';
import { contactApi, detailsApi } from '../utils/ApiList/axiosapi.js';

export default function useApicall() {
  const [detailData, setDetailData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get(detailsApi);
        setDetailData(response.data); 
        localStorage.setItem('Session_status', JSON.stringify(response.data.session_valid));
      } catch (error) {
        setError(error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get(contactApi);
        setContactData(response.data); 
      } catch (error) {
        setError(error?.response?.data?.session_valid || 'Error fetching contact data');
      }
    };

    fetchData1();
    fetchData2();
  }, []);

  return { detailData, contactData, error };
}
