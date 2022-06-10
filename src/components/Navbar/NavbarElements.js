import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #000000;
  height: 85px;
  display: flex;
  justify-content: center;
`;
  
export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #e76a61;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #53535C;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    border-radius: 20px;
    display: block;
    background-color: black;
    width: 150px;
    font-size: 1.2rem
  }
`;

