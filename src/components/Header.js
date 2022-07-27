import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <NavLink to="/home" alt="Home" exact activeStyle={{color:''}} >
          <img src="/images/logo.svg" alt="Kadru Skyrius" />
        </NavLink>
      </Logo>
      <NavMenu>
        <NavLink to="/films" alt="films"  exact activeStyle={{color:''}}>
          <span>films</span>
        </NavLink>
        <NavLink to="/ads" alt="ads"  exact activeStyle={{color:''}}>
          <span>ads</span>
        </NavLink>
        <NavLink to="/info" alt="info"  exact activeStyle={{color:''}}>
          <span>info</span>
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: ;
  width: 120px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 70px;
  display: inline-block;
  margin-left: 12%;
  img {
    display: block;
    width: 100%;
  }
  /* @media (max-width:900px){
        margin-left:20px;
    } */
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-left: auto;
  margin-right: 10%;
  /* @media (max-width: 900px) {
        margin-right:20px
    } */

  a {
    display: flex;
    align-items: center;
    padding: 0px 16px;

    span {
      color: black;
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        /* content: "hello"
            display:block; */
        background-color: black;
        border-radius: 0px 0px 1px 1px;
        bottom: -3px;
        content: "";
        height: 0.5px;
        left: 0px;
        opacity: 0px;
        position: absolute;
        right: 0;
        transform-origin: center center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
