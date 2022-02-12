import React from 'react';
import styled from 'styled-components';
import {FcGoogle} from 'react-icons/fc'
import {FaAmazon,FaApple} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
const PartnerContainer=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #162d77;
  flex-direction: column;
  padding-bottom:1rem;
  background:#F2F5F7;

`;
const Heading=styled.h1`
text-transform:uppercase;
margin-top:1rem;

`;
const ImagePartner=styled.div`
font-size:4rem;
display:flex;
flex-wrap:wrap;
column-gap:3rem;
row-gap:2rem;
align-items:center;
justify-content:center;
padding:0rem 1rem;
`;
const OurPartner = () => {
  return <div>
      <PartnerContainer>
          <Heading>Our Partner</Heading>
          <ImagePartner>
<FcGoogle/>
<FaAmazon/>
<FaApple/>
<BsPinterest/>
          </ImagePartner>
      </PartnerContainer>
  </div>;
};

export default OurPartner;
