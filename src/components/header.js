import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render (){
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Media App VOD</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">History</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
