import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components'
import logo from '../../assets/home.png'
import BestOffer from '../Homes/BestOffer';
import PopularDestination from '../Homes/PopularDestination';
import Trips from '../Homes/Trips';
import WhyChooseUs from '../Homes/WhyChooseUs';
import Packages from '../Packages/Packages';
const HomeContainer=styled.img`
width:100%;
object-fit:cover;
@media screen and (max-width:768px)
{
  height:30vh;
}

`;
const HomeSection=styled.div`
position:relative;

.button{
 
  background:#ea500e;
  padding:0.5rem 3rem;
  border-radius:50px;
  color:#fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 :hover
 {
  background:#000;
 }
}
}


`;
const Home = () => {
  return <>
  <HomeSection>
    
<Button size="small" className="button">Explore</Button>
<HomeContainer src={logo}/>
</HomeSection>
{/* <BestOffer/> */}
<Packages/>
<WhyChooseUs/>
 {/* <Trips/> */}
{/* <PopularDestination/> */}





  </>;
};

export default Home;
