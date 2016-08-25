import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <div className="header clearfix">
      <nav>
        <ul className="nav nav-pills pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to='/'>Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h3 className="text-muted">Starter Boilerplate </h3>
    </div>
  );
}

export default Header;
