import React from "react";
import CardPackage from "./CardPackage";
import styled from "styled-components";
import logo from "../../assets/footer_image.png";

import Carousel from "react-elastic-carousel";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
const PackageHeader = styled.h1`
  padding: 1.5rem 0rem 0rem 0rem;
  text-align: center;
  color: #211f54;
  text-transform: uppercase;
`;
const Packagecard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 3rem 3rem 1rem 3rem;
  @media screen and (max-width: 1024px) {
    padding: 2rem 0rem 0rem 0rem;
  }

  button.rec-dot {
    visibility: hidden;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec.rec-arrow {
    color: #000;
    @media screen and (max-width: 1024px) {
      visibility: hidden;
    }
  }
  .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    background-color: var(--clr-primary-400);
    box-shadow: 0 0 1px 3px var(--clr-primary-400);
  }
`;
const PackageContainer = styled.div`
  background: url(${logo});
  background-size: cover;
  margin-top: 1rem;

  background-color: #cfe1f4;
  background-repeat: no-repeat;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 2, itemsToScroll: 2 },
  // { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1550, itemsToShow: 4, itemsToScroll: 2 },
];
const Packages = () => {
  const [data, setdata] = useStateValue();
  console.log(data);
  return (
    <div>
      <PackageHeader>Most Popular Package</PackageHeader>
      <PackageContainer>
        <Packagecard>
          <Carousel
            breakPoints={breakPoints}
            autoPlaySpeed={3000}
            enableAutoPlay={true}
          >
            {data.map((item, index) => {
              return (
                <div key={index}>
                <Link to={`/package/${index}`}>
                  <CardPackage item={item}  />
                </Link>
                </div>
              );
            })}
          </Carousel>
        </Packagecard>
      </PackageContainer>
    </div>
  );
};

export default Packages;
