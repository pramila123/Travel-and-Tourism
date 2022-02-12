import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import TextFieldForm from "../Forms/TextFieldForm";

const ContactForm = () => {
  return (
   
      <Grid item xs={12} md={8} sx={{
       padding:"1rem",
       borderRadius:"5px",
        boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
      }}>
         
        <Grid container
       
        spacing={2} pr={2} pl={2} pb={2}>
      
          <Grid item xs={12} sx={{
            textAlign:"center",
           fontSize:"2rem",
           fontWeight:"bold",
           color:"#162D5D",
           padding:"0.5rem"
          }}>
           
            Get In Touch
          </Grid>
          <Grid item xs={12}  md={6}>
           
            <TextFieldForm name="firstname" label="FirstName" />
          </Grid>

          <Grid item xs={12}  md={6}>
            <TextFieldForm name="lastname" label="LastName" />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextFieldForm name="phone" label="Phone no" />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextFieldForm label="Message" rows={4} />
          </Grid>
          
          <Grid item xs={12}  sx={{ display:"flex",justifyContent: "center" }} >
          
           <Button 
           size="small"

           sx={{
             background:"#162D5D",
             color:"#fff",
             padding:"0.5rem",
            
             

           }}>Send Message</Button>
          </Grid>
       
        </Grid>
       
      </Grid>
  
  );
};

export default ContactForm;
