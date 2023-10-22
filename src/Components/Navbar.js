import React from 'react';
import PropTypes from 'prop-types';
import martex from './images/martex.png';


export default function Navbar(props) {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
  <img src={martex} alt="" /><a className="navbar-brand ms-4 bg-body-White" href="pages">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="pages">{props.aboutText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages"> Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="FAQs">FAQs</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <a className="nav-link" href="signin"><input className="form-control" type="signin" placeholder="SignIn" aria-label={props.SignIn } /></a>
      <a className="nav-link" href="signup"><button className="btn btn-outline-success" type="submit">SignUp</button></a>
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