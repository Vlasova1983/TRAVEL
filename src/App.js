import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import {  useSelector } from "react-redux";
// import { getFilter } from './redux/filter/filter.selector';

import './App.module.css';

const Home = lazy(() => import('./pages/Home/Home'));
const OneCardPage = lazy(() => import('./pages/OneCardPage/OneCardPage'));
const Stays = lazy(() => import('./pages/Stays/Stays'));
const Flights = lazy(() => import('./pages/Flights/Flights'));
const Packages = lazy(() => import('./pages/Packages/Packages'));
const Login=lazy(() => import('./pages/Login/Login'));
const Layout = lazy(() => import('./component/Layout/Layout'));

const App = () => { 
  return(
    <BrowserRouter >    
      <Suspense > 
          <Layout>            
            <Routes >              
            <Route path="/TRAVEL" element={<Home/>} />
              <Route path="/:travelId" element={<OneCardPage />} />
              <Route path="stays" element={< Stays/>}/> 
              <Route path="flights" element={< Flights/>}/>
              <Route path="packages" element={< Packages/>}/>                       
              <Route path="login" element={<Login/>}/>
            </Routes>       
         </Layout> 
      </Suspense>        
    </BrowserRouter>
  );
 
};


export default App;
