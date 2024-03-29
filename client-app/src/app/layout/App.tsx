

import {  Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import React from "react";
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  
return (
  <>

  {location.pathname === '/'?<HomePage/> : (
    <>
     <NavBar />
 <Container style={{marginTop: '7em'}}>
<Outlet/>
 </Container>
  
    
    </>
  )}

  </>
  
)
  
}

export default observer(App);
