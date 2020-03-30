/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import {
 Container, Logo, NavLinks, NavItem
} from "./styles";

function Header(props) {
  const { pathname } = props.location;

  return (
    <Container>
      <Logo>
        <Link to="/covid">
          Covid-19
        </Link>
      </Logo>
      <NavLinks>
        <NavItem active={pathname === `/`}>
          <Link to="/">
            Home
          </Link>
        </NavItem>
        <NavItem active={pathname === `/covid`}>
          <Link to="/covid">
            Covid
          </Link>
        </NavItem>
        <NavItem active={pathname === `/about`}>
          <Link to="/about">
            About
          </Link>
        </NavItem>
      </NavLinks>
    </Container>
  );
}

export default withRouter(Header);
