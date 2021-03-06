import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Navbar.scss';

class navbar extends React.Component {
    static propTypes = {
      authed: PropTypes.bool.isRequired,
    }

    state= {
      isOpen: false,
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      const buildNavbar = () => {
        if (authed) {
          return (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="font" tag={RRNavLink} to='/home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font" tag={RRNavLink} to='/new'>Add a Cigar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font" onClick={this.logMeOut}>Logout</NavLink>
              </NavItem>
            </Nav>
          );
        }
        return <Nav className="ml-auto" navbar />;
      };

      return (
        <div className="MyNavbar">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand className="font" href="/">My Humidor</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {buildNavbar()}
            </Collapse>
          </Navbar>
        </div>
      );
    }
}

export default navbar;
