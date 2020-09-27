import React from 'react';
import {Link} from 'react-router-dom';



const Navigation =() =>{

    return(
       
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home">Home </Link>
            <Link className="nav-item nav-link" to="/products">Products</Link>
            <Link className="nav-item nav-link" to="/admin">Admin</Link>
            <Link className="nav-item nav-link " to="/contact" tabIndex="-1" >Contacts</Link>
          </div>
        </div> 
      </nav>
      
    );

}

export default Navigation;