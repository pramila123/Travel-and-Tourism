import React from 'react'
import { subnavmenu } from './SubMenu'
import styled from 'styled-components'
const SubMenuContainer=styled.div`

margin-top:1.5rem;
`;
const SubMenu=styled.div`
background:#2D2C57;
border-bottom:1px solid #fff;
text-align:center;
padding:0.8rem;


`;
const NavbarDropdown = () => {
    return (
        <>
        <SubMenuContainer>
        {
              subnavmenu.map((items,index)=>
              {
                  return (
                      <SubMenu key={index}>{items.name}</SubMenu>
                  )
              })
          }  
        </SubMenuContainer>
          
        </>
    )
}

export default NavbarDropdown
