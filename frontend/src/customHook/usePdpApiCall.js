import React from "react";
import axios from "axios";

function usePdpApiCall(api,product_no) {
  const [pdpData, setPdpData] = React.useState({});
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}?productCode=${product_no}`);
        setPdpData((prevData) => {
          // Only update state if the new data is different
          if (JSON.stringify(prevData) !== JSON.stringify(response.data)) {
            return response.data;
          }
          return prevData;
        });
        //console.log("pdpData", response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [api, product_no, pdpData]); // pdpData included to satisfy the linter

  return {
    pdpData,
    error,
  };
}

export default usePdpApiCall;
