import React from "react";

import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const data = [
  {
    logo: require("../../assets/mountain.png"),
    title: "mountain",
  },
  {
    logo: require("../../assets/mountain.png"),
    title: "tilicho",
  },
  {
    logo: require("../../assets/mountain.png"),
    title: "mountain",
  },
  {
    logo: require("../../assets/mountain.png"),
    title: "tilicho",
  },
  {
    logo: require("../../assets/mountain.png"),
    title: "tilicho",
  },
  {
    logo: require("../../assets/mountain.png"),
    title: "tilicho",
  },
];
const DestinationContainer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
//   background:#F4F2F8;
  padding: 0.5rem;
  h2 {
    margin-bottom: 0.8rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  .image {
    height: 30vh;
  }
  h3 {
    text-align: left;
    margin: 0.5rem;
  }
  .popularImg {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  }

  .rec.rec-arrow:hover {
    border-radius: 50%;
    color:green;
}
  .rec.rec-arrow {
   color:red;
}
.rec.rec-arrow:disabled {
    visibility: hidden;
}
.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px red;
}
`;

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 3 }
  ];
const PopularDestination = () => {
   
  return (
    <div>
      <DestinationContainer>
        <h2>Popular Destination</h2>
        
        <ImageContainer>
        <Carousel breakPoints={breakPoints}>
          {data.map((item, index) => {
            return (
              <div key={index} className="popularImg">
                {" "}
                <img src={item.logo} alt="" className="image" />
                <h3>{item.title}</h3>
              </div>
            );
          })}
          </Carousel>
        </ImageContainer>
        
      </DestinationContainer>
    </div>
  );
};

export default PopularDestination;
