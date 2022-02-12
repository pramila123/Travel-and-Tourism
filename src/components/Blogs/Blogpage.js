import { Button, Pagination, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { data } from "./BlogData";
import logo from '../../assets/blogs.png'



const BlogContainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding:1rem 3rem;
  @media screen and (max-width:760px)
  {
    grid-template-columns: 1fr ;
    padding:1rem;
  }
`;
const BlogSection = styled.div`
 
   padding: 1.5rem 2rem;
  display: flex;
  gap: 2rem;

  @media screen and (max-width:1200px)
  {
      flex-direction:column;
      padding: 1rem;
      gap:1rem;
  }
`;
const CardImage = styled.img`
  height:35vh;
  
  width:40%;
  object-fit:cover;
  border-radius:10px;
  @media screen and (max-width:1200px)
  {
      width:100%;
      object-fit:cover;
    
      border-radius:0px;
      height:50vh;
  }
`;
const ContentBlog = styled.div`
  cursor: pointer;
  // width: 100%;

  h3 {
    margin-bottom: 0.5rem;
    
  }
  p {
   
    text-align: justify;
    line-spacing: 0.1rem;
  }
  .read {
    background: #162d5d;
    color: #fff;
    text-transform: none;
    padding: 0.3rem 1rem 0.3rem 1rem;
    margin: 1rem 0rem 0rem 0rem;
    :hover {
      background: #162d5d;
      color: #fff;
    }
  }
`;
const BlogDate = styled.div``;
const BlogHeader=styled.div`
background:url(${logo});
background-size: cover;
height: 300px;
background-repeat:no-repeat;
object-fit: cover;
object-position: bottom;
width:100%;

@media screen and (max-width:768px)
{
  height: 250px;
}
`;
const BlogImage=styled.img`
width:100%;

`;
const Blogpage = () => {
 
 

  return (
    <div>
     


      <BlogHeader />
      


     


     
      <BlogContainer>
      
        {data.map((item, index) => {
          return (
            <Paper elevation={2} key={index}>
            <BlogSection >
              
                <CardImage src={item.img} />
             
              <ContentBlog>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Typography sx={{ justifyContent: "center", display: "flex" }}>
                  <Button size="small" className="read">
                    Read More
                  </Button>
                </Typography>

                {/* <BlogDate>hello</BlogDate> */}
              </ContentBlog>
             
            </BlogSection>
             </Paper>
          );
        })}
        
      </BlogContainer>
      
      <Pagination count={10} style={{display:"flex",justifyContent:"center",marginBottom:"1rem"}} > </Pagination>
    </div>
  );
};

export default Blogpage;
