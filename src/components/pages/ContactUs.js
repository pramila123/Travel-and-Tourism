import React from 'react';
import ContactForm from '../Contact/ContactForm';
import styled from 'styled-components';
import GoogleMaps from '../Contact/GoogleMaps';
import logo from "../../assets/contact.png"
import ContactData from '../Contact/ContactData';
const ContactContainer=styled.div`
margin-top:2rem;
margin-bottom:2rem;
display:flex;

justify-content:space-evenly;
padding:0rem 5rem;
gap:4rem;
@media screen and (max-width:899px)
{
  flex-direction:column;
  gap:2rem;
  margin:0rem;
  padding: 1rem;
  
}

`;
const ContactImage=styled.img`

width:100%;

object-fit:cover;
// height: 60vh;
@media screen and (max-width:768px)
{
  height: 40vh;

 
}
`;
const ContactSection=styled.div`
h1
{
  position:absolute;
  color:#fff;
transform:translate(50%,200%);
}
`;
const ContactUs = () => {
  return <div>
    
    <ContactSection>
    <h1>Contact Us</h1>  
    <ContactImage src={logo}/>
    
    </ContactSection>
    <ContactData/>
<ContactContainer>
<ContactForm/>
<GoogleMaps/>

</ContactContainer>
   
  </div>;
};

export default ContactUs;
