import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {ButtonContainer} from "./Button";


class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg  navbar-dark ">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Link>

        {/* <ul className="navbar-nav align-items-center mr-auto">
      <li className="nav-item ml-5">
        <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
    </ul> */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Product <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>

        <form className="form-inline">
          {/* <Link to="/cart" class="btn btn-primary my-2 my-sm-0"> */}
          <Link to="/cart" className="ml-auto">
            {/* <i className="fas fa-cart-plus"></i> Cart */}
            <ButtonContainer>
            <i className="fas fa-cart-plus"></i> my Cart 
            </ButtonContainer>

          </Link>
        </form>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue)!important;
.nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize !inportant
}
`;


export default Navbar;
