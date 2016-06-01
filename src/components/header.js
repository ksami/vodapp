import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render (){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Media App VOD</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            <Link to="/history">History</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
