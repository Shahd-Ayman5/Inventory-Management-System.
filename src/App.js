import 'E:/web development/Inventory/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SignIn from './signIn';
import Home from './home';
import './App.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemsTable from './items';
import Log from "./login";



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <p></p>

        <Routes>
          <Route path = "sign in" 
          element = {< SignIn/>}/>
          <Route path = "home" element = {<Home/>}/>
          <Route path = "items" 
          element = {
            <>
          <ItemsTable/>

          </>}/>
          <Route path = "login" element = {<Log/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
