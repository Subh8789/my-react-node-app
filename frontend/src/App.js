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
import { useEffect, useState } from 'react';
import { richRelevance } from './utils/ApiList/axiosapi.js';
function App() {


  const {detailData, contactData, error} = useApicall();

  //const [dummyData,setDummyData ] = useState({});

  /* rich relevance api call
  useEffect(() => {
    // First API call to fetch dummy data
    fetch('https://dummyjson.com/c/cfff-87bd-43b8-9751')
      .then(response => response.json())
      .then(data_result => {
        setDummyData(data_result);
        fetchData(data_result); // Call fetchData with the fetched dummy data
      })
      .catch(error => console.error('Error fetching dummy data:', error));
  
    const fetchData = async (dummyData) => {
      const url = richRelevance; // Assuming richRelevance is a defined string
  
      // Body parameters
      const body = {
        dummyData: dummyData, // Pass the fetched dummyData here
      };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("second api rich relevance output", data); // Handle the response data as needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  }, [richRelevance]); // Include richRelevance in the dependency array if it's dynamic
  

  console.log("dummydata",dummyData)


  if(dummyData === undefined){
    return <div>Loading...</div>
  }
  else{
    console.log("dummydata_items",dummyData.placements)
  }
  */

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout detailData={detailData} contactData={contactData} error={error}/>}>
        <Route index element={<Home/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='pdp' element={<PdpPage/>}/>
        <Route path="pdp/:product_no" element={<ProtectedRoute element={PipPage} />} />
         <Route path="/pip/:product_no" element={<ProtectedRoute element={PipPage} />} />
         
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
