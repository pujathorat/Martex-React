import React from 'react';
import PropTypes from 'prop-types';
import martex from './images/martex.png';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
  <img src={martex} alt="" /><Link className="navbar-brand ms-4 bg-body-White" to="/pages">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/pages">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pages"> Pages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/FAQs">FAQs</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <Link className="nav-link" to="/signin"><input className="form-control" type="signin" placeholder="SignIn" aria-label={props.SignIn } /></Link>
      <Link className="nav-link" to="/signup"><button className="btn btn-outline-success" type="submit">SignUp</button></Link>
      </form>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype= {title:PropTypes.string.isRequired,
                   aboutText:PropTypes.string,
}
Navbar.defaultProps={
  title:'Martex',
  aboutText: 'About'
}