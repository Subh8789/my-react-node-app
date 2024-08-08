import React from 'react';
import '../utils/css/dropdownmodel.css';
import { Link } from 'react-router-dom';
 import useApiCall from '../customHook/useApicall.js';

 import { useContext } from 'react';
import UserContext from '../utils/contextdata/userContext';

function DropdownModel({ signedin,username,setSignedIn }) {

    //console.log("signedin under dropdownmodel",signedin)
    const signInHandler = () => {
      setSignedIn &&  setSignedIn(false);
      //const {detailData, contactData, error} = useApiCall();
    }

    const userdata = useContext(UserContext);

  if(!userdata)return null;
  console.log("detaildtaa under dropdonmodel",userdata )

    return (
        <div className="card">
            {signedin && <div className="card-header">
                <h3>Welcome Aboard, {userdata?.detailData?.given_name}</h3>
            </div>}
            <div className="card-body">
                <ul>
                  { !signedin && <> <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="" >Create an Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Legacy Account</Link>
                    </li>
                   </>}
                    { signedin && <> 
                        <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    </>}
                </ul>
            </div>
            {<div className="card-footer">
                <div onClick={signInHandler} className='btn-signin'><Link to="">{signedin ? "SIGN OUT" : "Sign in to MyBuildings"}</Link></div>
            </div>}
        </div>
    );
}

export default DropdownModel;
