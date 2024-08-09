import  { getProductDetail} from '../utils/ApiList/axiosapi';
import usePdpApiCall from "../customHook/usePdpApiCall";
import Pdp from "../components/Pdp";


const PdpPage = () => {
    const product_no = "BEAMHK";

    const pdpData = usePdpApiCall(getProductDetail,product_no);

   console.log("data from pdppage",pdpData);

    return (
        <>
           <Pdp data = {pdpData} />
        </>
    );
};

export default PdpPage;