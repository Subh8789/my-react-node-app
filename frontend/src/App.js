import './App.css';
import SearchPage from './pages/Search-page.js';
import Layout from './Layout/Layout.js';
import {Route, RouterProvider, createRoutesFromElements,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.js';
import NotFound from './components/NotFound.js';
import useApicall from './customHook/useApicall.js';
import ProtectedRoute from './Route/ProtectedRoute.js';
import UserContext from './utils/contextdata/userContext.js';
import PipPage from './pages/PipPage.js';
import PdpPage from './pages/PdpPage.js';
import { useEffect } from 'react';

function App() {


  const {detailData, contactData, error} = useApicall();

  useEffect(() => {

    fetch('https://integration.richrelevance.com/rrserver/p13n_generated.js?a=a6730ec97b0c48d4&ts=1722357989222&v=1.2.6.20240524&ssl=t&atcid=%7CMN7510A2001%2FU&pt=%7Cadd_to_cart_page.rr1&u=0035a00003REfJrAAL&s=Z0hyQeOQYcghEO1oSvAx1722357851877&sgs=%7C0000187444%3AUniversal%20Supply%20Group%20Inc&cts=https%3A%2F%2Fqpublish-hbt.aws.aem.honeywell.com%2Fshop%2Fhoneywell%2Fen%2F&rid=1017-10~1107-10~1192-10~1265-13~1475-10~265H-10~265N-10~461G-10~USD&pref=https%3A%2F%2Fqpublish-hbt.aws.aem.honeywell.com%2Fus%2Fen%2Fsearch-results%3FdocType%3DSku%26search%3DMN7510A2001%252FU&rcs=eF5jYSlN9kg0tDQwMkg20DUwtTDRNTFKNNFNSkw10U01NzMxNjdPTTEwMOXKLSvJTBEwtDA30zXUNQQAhBYNyg&l=1')
    .then(response => response.text())
    .then(data_result => console.log(JSON.stringify(data_result)))

   
  }, []);


  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout detailData={detailData} contactData={contactData} error={error}/>}>
        <Route index element={<Home/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='pdp' element={<PdpPage/>}/>
        <Route path="pdp/:product_no" element={<ProtectedRoute element={PipPage} />} />
         <Route path="search/:product_no" element={<ProtectedRoute element={PipPage} />} />
         
        <Route path='*' element={<NotFound error="404 page not found"/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <UserContext.Provider value={{detailData, contactData, error}}>
      <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
