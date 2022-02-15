import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import logo from "../../assets/package.png";
import { CardActionArea, Grid } from "@mui/material";

const CardPackage = ({item,key}) => {

  return (
    <>
    
          <Card sx={{ maxWidth: 345 }} key={key}>
      <CardActionArea>
        <CardMedia component="img" height="190" image={logo} alt=""  />
        <CardContent>
          <Typography
            gutterBottom
            style={{ fontSize: "1.1rem", fontWeight: 500 }}
          >
           {item.title}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Hello</span>
            <span style={{ color: "blue" }}>{item.price}</span>
          </Typography>
          <Typography variant="body2" style={{ textAlign: "justify" }}>
           {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       
    </>
  );
};
export default CardPackage;
