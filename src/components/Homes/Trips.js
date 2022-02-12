import React from 'react';
import styled from 'styled-components'
import logo from '../../assets/trip.png'
const TripContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0.5rem 1.5rem 0rem 1.5rem;
@media screen and (max-width:890px)
{
    flex-direction:column;
}
`;
const LeftTrip=styled.div`
margin-right:2rem;
p
{
    text-align:justify;
    margin-top:1rem;
    letter-spacing:1px;

}
h3 
{
    font-size:1.2rem;
}
@media screen and (max-width:890px)
{
   margin:auto;
}
`;
const RightTrip=styled.img`
margin-top:1.5rem;

border-radius:10px;
cursor:pointer;
margin-left:1rem;
:hover 
{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border:none;
}
@media screen and (max-width:890px)
{
  display:none;
}
`;
const Trips = () => {
  return <>
  <TripContainer>
  
      <LeftTrip>
      <h3>Why plan your trip with us ?</h3>
      <p>Aaradhya tours & travel Pvt.Ltd is the leading
           travel company in providing leisure holidays and 
           adventure activities in Nepal. Aaradhya tours is 
           Government certified travel and trekking company registered with the Office of 
           the Company Register ,Nepal government and active members of Trekking Agents Association 
           of Nepal (TAAN) and Nepal Tourism Board (NTB),established in Nayabazzar , Kathmandu. We 
           organize tours and treks for groups and individuals of all ages. We can tailor-make any 
           program or package to suit your interest, schedule, fitness level and budget. Offering 
           probably the best and most personalized services with expert staffs in their field. They are 
           also pioneers in guiding tourists to such exotic destinations. 

We offer carefully planned itineraries to suit each and every tourist with diverse range of tastes, budget and schedule with an objective of having you with us on our trips. Our mission is to provide our clients unforgettable travel experiences through our wide range of high quality yet good value packages. We assure you of our most competitive prices with utmost attention and best services at all times.
</p>

      </LeftTrip>
      <RightTrip src={logo}/>
  </TripContainer>
  </>;
};

export default Trips;
