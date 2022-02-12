import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdOutlineMail, MdPhone, MdLocationPin } from "react-icons/md";
const FooterSection = styled.div`
  background:#F4F7F9;
  color: #162D5D;
  font-weight:600;
`;
const FooterContainer = styled.div`
  padding: 3rem 0rem 2rem 1rem;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  @media screen and (max-width:768px)
  {
    flex-direction:column;
   
  }
`;
const LeftContainer = styled.div`
padding:0.5rem;
`;
const RightContainer = styled.div`
display:flex;
gap:8rem;
@media screen and (max-width:768px)
  {
    display:grid;
  gap:5rem;
 grid-template:"header header header"
  }

  @media screen and (max-width:560px)
  {
    display:flex;
  gap:2rem;
 flex-direction:column;
  }
 

  p {
    padding-bottom: 0.3rem;

    margin-bottom: 0.5rem;
  }
`;

const GetTouch = styled.div`
  .getTouch {
    display: flex;
    align-items: center;
    margin-top: 0.4rem;
  }
  span {
    margin-left: 1.2rem;
  }
`;
const CategoryContainer = styled.div`
  .categories {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  span {
    margin-top: 0.1rem;
  }
`;
const SocialMedia = styled.div`
  cursor: pointer;
  .socialicon {
    font-size: 1.2rem;
    margin: 0.4rem;
  }
  a {
    color: #162D5D;
  }
`;
const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <LeftContainer>Hello</LeftContainer>
          <RightContainer>
            <GetTouch>
              <p>Get In Touch</p>
              <div className=" getTouch">
                <MdOutlineMail />
                <span>info@gmail.com</span>
              </div>
              <div className="getTouch">
                {" "}
                <MdPhone />
                <span>9843568714</span>
              </div>
              <div className="getTouch">
                <MdLocationPin />
                <span>radheradhe bhaktapur</span>
              </div>
            </GetTouch>

            <CategoryContainer>
              {" "}
              <p>Category</p>
              <div className="categories">
                <span>Adventure</span>
                <span>Cultural</span>
                <span>Historical</span>
                <span>Travel & tips</span>
                <span>Things to do</span>
              </div>
            </CategoryContainer>
            <SocialMedia>
              <p>Social Media</p>
              <a href="https://www.facebook.com">
                {" "}
                <BsFacebook className="socialicon" />
              </a>
              <a href="https://www.instagram.com">
                <BsInstagram className="socialicon" />
              </a>
              <a href="https://www.twitter.com">
                {" "}
                <BsTwitter className="socialicon" />{" "}
              </a>
            </SocialMedia>
          </RightContainer>
        </FooterContainer>
      </FooterSection>
    </>
  );
};
export default Footer;
