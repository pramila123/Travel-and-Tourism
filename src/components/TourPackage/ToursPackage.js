import * as React from "react";

import styled from "styled-components";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import BookTrip from "./BookTrip";
import TourDescription from "./TourDescription";
import { useParams } from "react-router-dom";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  background: #fff;
  margin: 0.5rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  //   &.${tabUnstyledClasses.selected} {
  //     // background-color: ${blue[50]};
  //     color: ${blue[600]};
  //   }

  //   &.${buttonUnstyledClasses.disabled} {
  //     // color: ${blue[600]};
  //     cursor: not-allowed;
  //   }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 150%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
.description
{
 
}
`;

const TabsList = styled(TabsListUnstyled)`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
`;
const TabContainer=styled.div`
display:flex;
padding:0rem 2rem;
justify-content:center;

gap:3rem;
`
const TourPackages = () => {
  const {id}=useParams();
  return (
    <>
    <TourDescription/>
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Details</Tab>
        <Tab>Travel Diary</Tab>
        <Tab>Includes</Tab>
        <Tab>Excludes</Tab>
      </TabsList>
      <TabContainer>
      <TabPanel value={0} >
        <div className="description"> Trip Overview {id}</div>
       </TabPanel>
      <TabPanel value={1}>Travel Diary {id}</TabPanel>
      <TabPanel value={2}>Includes</TabPanel>
      <TabPanel value={3}>Excludes</TabPanel>
      <div>
        <BookTrip/>
      </div>
      </TabContainer>
    </TabsUnstyled>
    </>
  );
};
export default TourPackages;
