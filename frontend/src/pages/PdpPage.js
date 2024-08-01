import react from "react";
import Pdp from "../components/Pdp";

import useGetPdpData from "../customHook/useGetPdpData";

const PdpPage = () => {

    const { productDetails, error, loading } = useGetPdpData();

    console.log("productDetailsfromPDp page",productDetails);
    console.log("errorpdppage",error);
    console.log("loadingpdppage",loading);

    return (
        <>
            <Pdp />
        </>
    );
};

export default PdpPage;