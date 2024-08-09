import React, { useState } from "react";
//import "../utils/css/pdp.css";
import { Link } from "react-router-dom";

const Pdp = ({ data}) => {
  const [activeTab, setActiveTab] = useState("Overview");

  if (!data) return null;

  console.log("data from pdpcomponent", data);
 
  const specifications = data?.pdpData?.classifications;
  const description = data?.pdpData?.description;
  const resources = data?.pdpData?.media;
  const productimg = data?.pdpData?.images;

  const pdfDownload = (_url, filename) => {
    console.log("pdfdownload", _url);
    const link = document.createElement("a");
    link.href = _url;
    link.target = "_blank";
    link.download = filename; // Optional: Sets the file name based on the URL
    link.click();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="main-content">
      <div className="product-title">
        <div className="products-title-info">
          <b className="">Accessories</b>

          <h1 className="">BEAM1224 Heating Kit</h1>

          <p className="">
            Heating kits for use to prevent condensation with the BEAM1224
            conventional beam smoke detectors. They lessen the likelihood of
            condensation by maintaining the unit at a temperature that is
            slightly higher than the surrounding air.
          </p>
          
        </div>
      </div>

      <div className="product-info-side">
        <nav className="product-navbar">
          <ul className="product-nav-items">
            <li
              className={activeTab === "Overview" ? "active" : ""}
              onClick={() => handleTabClick("Overview")}
            >
              Overview
            </li>
            <li
              className={activeTab === "Specifications" ? "active" : ""}
              onClick={() => handleTabClick("Specifications")}
            >
              Resources
            </li>
            <li
              className={activeTab === "SKU" ? "active" : ""}
              onClick={() => handleTabClick("SKU")}
            >
              SKU
            </li>
          </ul>
        </nav>

        <div className="product-content">
          {activeTab === "Overview" && description && (
            <>
              <div className="image-side">
                {productimg && (
                  <div className="images">
                    <img src={productimg[1].url} className="beamhk-image-2" />
                    <img
                      src={productimg[1].url}
                      alt={productimg[1].altText}
                      className="beamhk-image-1"
                    />
                  </div>
                )}
              </div>

              <div className="product-overview-pdp">
                <div className="button-section">
                    <button>CONTACT US</button>
                    <button  onClick={() => handleTabClick("SKU")}>BUY ONLINE</button>
                    <button>FIND A PARTNER</button>
                </div>
                <p className="product-desc-info"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
               <b> Features & Benefits: </b>

              </div>
            </>
          )}
          {activeTab === "Specifications" && specifications && (
            <div className="product-specifications">
              <table className="resources-table">
              <tr className="resources-table-rows">
                  <td className="resources-table-headers">NAME</td>
                  <td className="resources-table-headers">DATE</td>
                  <td className="resources-table-headers">SIZE</td>
                </tr>
                {specifications.map((specification, index) => (
                  <tr key={index} >
                    <td>{specification.code}</td>
                    <td>{specification.value}</td>
                    <td>340.0kb</td>

                  </tr>
                ))}
              </table>
            </div>
          )}
          {activeTab === "SKU" && resources && (
            <div className="product-resources">
              <table className="resources-table">
                <tr className="resources-table-rows">
                  <td className="resources-table-headers">PART NUMBER</td>
                  <td className="resources-table-headers">DESCRIPTION</td>
                  <td className="resources-table-headers"></td>
                </tr>
                {resources.map((resource, index) => (
                  <tr key={index}>
                    <td>{resource.resourceName}</td>
                    <td>
                      <Link
                        onClick={() =>
                          pdfDownload(
                            // resource.externalLink,
                            // resource.resourceName
                            "https://res.cloudinary.com/dz8qhefe6/image/upload/v1721397461/202-LS-014-2020.pdf",
                            "demo"
                          )
                        }
                        className="download-link"
                      >
                        Download
                      </Link>
                    </td>
                   <Link to="/pdp/pippage"><td>ORDER ONLINE</td></Link>
                  </tr>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pdp;
