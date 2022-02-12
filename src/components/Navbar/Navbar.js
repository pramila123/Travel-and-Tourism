import React,{useState} from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { navMenu } from "./NavMenuList";
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
const Nav = styled.div`
  background:#f2f5f7;
 
  position:sticky;
  z-index:99;
  color:#162D5D;
  font-size: 1rem;
  font-weight:600;
  top:0;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px 20px 60px;
`;
const NavLogo = styled.div``;
const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  @media screen and (max-width:890px)
{
    flex-direction:column;
    position:absolute;
margin-top:1.5rem;
    background:#f2f5f7;
    color:#162D5D;
    padding:1rem;
   width:100%;
  left:${({mobile})=>(mobile? 0:"-100%")};
 
 transition:0.1s ease-in;
   text-align:center;
  
}
`;
const NavList = styled.li`
  padding-right: 1rem;
  margin-right: 1rem;
  @media screen and (max-width:890px)
{
    padding:0.8rem;
}

`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #214996;
  
  &.active{
    color:red;
   
}
`;
const MobileIcon=styled.div`
font-size: 1.5rem;
display:none;
@media screen and (max-width:890px)
{
    display:block;
}
`;
const Navbar = () => {
  const [dropdown, setdropdown] = React.useState(false);
  const handleClick = () => {
    setdropdown(!dropdown);
  };
  const [mobile, setmobile] = React.useState(false)
  const handlemobileClick = () => {
    setmobile(!mobile);
  };


  return (
    <>
      <Nav >
        <NavContainer>
          <NavLogo>hi</NavLogo>
          <MobileIcon onClick={handlemobileClick}>
            {mobile? <MdCancel/>:<GiHamburgerMenu />}
          </MobileIcon>
          <NavMenu mobile={mobile} onClick={handlemobileClick}>
            {navMenu.map((items, index) => {
              // if (items.title === "Company Profile") {
              //   return (
              //     <NavList key={index} onClick={handleClick}>
              //       <NavLink to={items.links} >
              //         {items.title}
              //       </NavLink>
              //       {dropdown  && <NavbarDropdown />}
              //     </NavList>
              //   );
              // }

              return (
               
                <NavList key={index} >
               <NavLink to={items.links} 
              >{items.title}</NavLink>
                 
                </NavList>
              );
            })}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
