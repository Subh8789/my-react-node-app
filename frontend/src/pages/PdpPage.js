import react from "react";
import Pdp from "../components/Pdp";
import  {getProductDetail} from '../utils/ApiList/axiosapi';

import usePdpApiCall from "../customHook/usePdpApiCall";

//import useGetPdpData from "../customHook/useGetPdpData";

const PdpPage = () => {


    const data = usePdpApiCall(getProductDetail);

    console.log("data from pdp page",data);
    console.log("pdp page")

    return (
        <>
            <Pdp />
        </>
    );
};

export default PdpPage;