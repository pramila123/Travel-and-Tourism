import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/about.png";
const AboutContainer = styled.div`
  color: #162d5d;
  padding: 2rem;
  h1 {
    text-transform: uppercase;
  
  }
`;
const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  padding: 0rem 5rem;

  .image {
    background: red;
  }

  @media screen and (max-width:1100px)
  {
      flex-direction:column;
      padding:0rem 1rem;
      gap:2rem;
  }
`;
const Image = styled.img`
  object-fit: cover;
 
  @media screen and (max-width:1100px)
  {
      width:100%;
  }
`;
const Description = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:1rem;
flex-direction:column;
.readMore
{
    background:#162D77;
}
p 
{
  color:#000;
  font-weight:550;
  text-align:justify;
  letter-spacing:0.04rem;
  word-spacing:0.03rem;
}
`;
const Whowe = () => {
  return (
    <div>
      <AboutContainer>
        <AboutSection>
          <div className="image">
            <Image src={logo} />
          </div>
          <Description>
            <h1>Who we are</h1>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
        
            </p> <Button variant="contained" className="readMore"> Read More</Button>
          </Description>
        </AboutSection>
      </AboutContainer>
    </div>
  );
};

export default Whowe;
