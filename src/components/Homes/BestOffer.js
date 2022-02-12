import React from 'react';

import styled from 'styled-components';
const data=[
    {
        image:require("../../assets/offer1.png"),
        title:"Begnas"
    },
    {
        image:require("../../assets/offer2.png"),
        title:"Fewa"
    },
    {
        image:require("../../assets/offer3.png"),
        title:"Annapurna"
    },
]

const BestOfferContainer=styled.div`
h1 
{
    text-align:center;
    margin:2rem;
    color:#211F54;
    text-transform:uppercase;
  
}

`;
const OfferSection=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:2rem;


`;
const ImageContainer=styled.div`
cursor:pointer;
p 
{
    font-size:1.2rem;
    font-weight:bold;
    text-align:center;
    padding:0rem 0rem 2rem 0rem;
}
.image 
{
   height:30vh; 
}
:hover 
{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
border-radius:10px;
transform: scale(1.1);
transition: transform .1s;
}
`;
const BestOffer = () => {
  return <div>

      <BestOfferContainer>
      <h1>Top Destination</h1>
          <OfferSection>
             
              {
                  data.map((item,index)=>
                  {
                      return  <ImageContainer>
                      <img  className="image" src={item.image} alt=""/>
                      
                          <p>{item.title}</p>
                         
                      
                  </ImageContainer>
                  })
              }
             
          </OfferSection>
      </BestOfferContainer>
  </div>;
};

export default BestOffer;
