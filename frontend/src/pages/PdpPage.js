import react from "react";
import Pdp from "../components/Pdp";
import  {getAvailability, getPriceDetail, getProductDetail} from '../utils/ApiList/axiosapi';

import usePdpApiCall from "../customHook/usePdpApiCall";

//import useGetPdpData from "../customHook/useGetPdpData";

const PdpPage = () => {


    const pdpData = usePdpApiCall(getProductDetail);
    const priceData= usePdpApiCall(getPriceDetail);
    const getAvail = usePdpApiCall(getAvailability);

   console.log("data from pdppage",pdpData);

    return (
        <>
            <Pdp data = {pdpData} price ={priceData} avail = {getAvail}/>
        </>
    );
};

export default PdpPage;