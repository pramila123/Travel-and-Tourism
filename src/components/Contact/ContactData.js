import { Card } from "@mui/material";
import React from "react";
import { MdOutlineMail, MdPhone, MdLocationPin } from "react-icons/md";
import styled from "styled-components";
const ContactContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content:center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  @media screen and (max-width: 966px) {
    flex-direction: column;
    gap: 1rem;
  }
  .phone {
    cursor: pointer;
    border-radius: 5px;

    font-size: 1.2rem;
    font-weight: bold;
    background:#F4F7F9;
    color: #162D5D;
    display: flex;
    padding: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    .info {
      margin-left: 1rem;
      padding-right:1.1rem;
    
    }
    .infoemail {
        margin-left: 1rem;
        padding-right:4rem;
        
      }
      .infophone {
        margin-left: 1rem;
        padding-right:2.5rem;
      }
  }
`;

const ContactData = () => {
  return (
    <>
      <ContactContainer>
        <Card variant="outlined" className="phone">
          <MdPhone />
          <div className="infophone">
            <span>Phone</span>
            <p>M/ +9779814756745</p>
          </div>
        </Card>
        <Card variant="outlined" className="phone">
          <MdOutlineMail />
          <div className="infoemail">
            <span>Email</span>
            <p>info@gmail.com</p>
          </div>
        </Card>
        <Card variant="outlined" className="phone">
          <MdLocationPin />
          <div className="info">
            <span>Location</span>
            <p>Radheradhe bhaktapur</p>
          </div>
        </Card>
      </ContactContainer>
    </>
  );
};

export default ContactData;
