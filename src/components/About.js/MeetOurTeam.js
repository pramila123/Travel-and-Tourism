import React from "react";
import styled from "styled-components";
const team = [
  {
    img: require("../../assets/team1.jfif"),
    name: "Pramila",
    position: "BOD",
    location: "Dolakha",
  },
  {
    img: require("../../assets/team2.jfif"),
    name: "Hari",
    position: "CEO",
    location: "Dolakha",
  },
  {
    img: require("../../assets/team3.jfif"),
    name: "Pramila",
    position: "Member",
    location: "Dolakha",
  },
  {
    img: require("../../assets/team4.jfif"),
    name: "Hari",
    position: "Secretary",
    location: "Dolakha",
  },
  {
    img: require("../../assets/team3.jfif"),
    name: "Pramila",
    position: "CEO",
    location: "Dolakha",
  },
  {
    img: require("../../assets/team3.jfif"),
    name: "Pramila",
    position: "CEO",
    location: "Dolakha",
  },
];
const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #162d77;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
  }
`;
const ImageSection = styled.div`

  .image {
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }

  .details {
    transform: translate(25%, -150%);
    z-index: 5;
    position: absolute;
    transition: 1s;
    opacity: 0;
    color: #fff;
    cursor: pointer;
  }
   .details:hover{
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0rem 5rem;
  gap: 0.5rem;
  @media screen and (max-width: 1200px) {
    padding: 0rem;
  }
`;

const MeetOurTeam = () => {
  return (
    <div>
      <TeamContainer>
        <h1>Meet Our Team</h1>
        <p>Same goal and same dream</p>

        <ImageContainer>
          {team.map((item, index) => {
            return (
              <ImageSection key={index}>
                <img src={item.img} alt="" className="image" />
                <div className="details">
                  <h1>{item.name}</h1>
                  <h3>{item.position}</h3>
                  <h4>{item.location}</h4>
                </div>
              </ImageSection>
            );
          })}
        </ImageContainer>
      </TeamContainer>
    </div>
  );
};

export default MeetOurTeam;
