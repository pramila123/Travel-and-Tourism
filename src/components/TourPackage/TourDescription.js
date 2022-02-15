import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/home.png'
const TourContainer=styled.div`
span 
{
  font-size:3rem;
  font-weight:800;
  position:absolute;
  text-transform:uppercase;
  left:30%;
  color:#fff;
  top:40%;
}
`;
const TourImageContainer=styled.img`
width:100%;

`;
const TourDescription = () => {
  return (
    <TourContainer>
       <span>Mt.Everest</span>
      <TourImageContainer src={logo}/>
     
    </TourContainer>
  )
}

export default TourDescription