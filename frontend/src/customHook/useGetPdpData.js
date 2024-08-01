import React, { useState, useEffect } from 'react';
import usePdpToken from './usePdpToken';
import { getProductDetail ,getPriceDetail} from '../utils/ApiList/axiosapi';
import axios from 'axios';

const useGetPdpData = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchProductDetails = async () => {
      const token = await usePdpToken();
      console.log("tokenfromgetpdpdata",token);
      if (!token) {
        setError('Unable to obtain access token');
        setLoading(false);
        return;
      }

      const productUrl = getProductDetail;
      try {
        const response = await axios.get(productUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
     
    console.log("productDetails",productDetails);
    fetchProductDetails();
  }, [productDetails]);

  return { productDetails, error, loading };
};

export default useGetPdpData;

/*
const ProductDetailsComponent = ({ productCode }) => {
  const { productDetails, error, loading } = useProductDetails(productCode);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <pre>{JSON.stringify(productDetails, null, 2)}</pre>
    </div>
  );
};

export default ProductDetailsComponent;
*/