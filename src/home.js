import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Inventory Management System</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasDarkNavbar" 
            aria-controls="offcanvasDarkNavbar" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className="offcanvas offcanvas-end text-bg-dark" 
            tabIndex="-1" 
            id="offcanvasDarkNavbar" 
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Inventory Management System</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="offcanvas" 
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href= "#"  to="sign in">Sign in</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href= "#"  to="login">Log in</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href= "#"  to="items">Items List</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <p>------</p>
      <p>------</p>
      <h1 className="center">Welcome To Our Inventory Management System</h1>
      </>
    );
  }
const Home =()=>{
    return(
    <NavBar/>
    );
}
export default Home;