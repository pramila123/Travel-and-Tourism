import React from "react";
import styled from "styled-components";
// import logo from '../../assets/footer_image.png'
import { AiFillLike } from "react-icons/ai";
const ChooseContainer = styled.div`
  
  background-color: #fff;

  color: #162D5D;
`;
const ChooseSection = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  h1 {
    text-transform: uppercase;
  }
`;
const ChooseItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 2rem;
 
`;
const Choose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
 
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LineContainer = styled.div`
  border-bottom: 1px solid #162D5D;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding:0.5rem;
  font-size:1rem;
  .image {
      cursor:pointer;
    font-size: 4rem;
border:2px solid #162D5D;
border-radius:50%;
padding:0.5rem;

  }
  h2 {
  }
`;

const WhyChooseUs = () => {
  return (
    <div>
      <ChooseContainer>
        <ChooseSection>
       
          <h1>Why Choose Us?</h1>
          <ChooseItem>
          <LineContainer />
            <Choose>
              <ImageContainer>
                  
                  <AiFillLike className="image" />

             
               
                <h2>
                  Highly <br /> Qualified Services
                </h2>
                <p>
                  Loremsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries
                </p>
              </ImageContainer>

              <ImageContainer>
                <AiFillLike className="image" />
                <h2>
                  Highly <br /> Qualified Services
                </h2>
                <p>
                  Loremsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries
                </p>
              </ImageContainer>

              <ImageContainer>
                <AiFillLike className="image" />
                <h2>
                  Highly <br /> Qualified Services
                </h2>
                <p>
                  Loremsimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries
                </p>
              </ImageContainer>
            </Choose>

            <LineContainer />
          </ChooseItem>
        </ChooseSection>
      </ChooseContainer>
    </div>
  );
};

export default WhyChooseUs;
