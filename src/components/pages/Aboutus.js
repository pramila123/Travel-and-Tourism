import React from 'react';
import MeetOurTeam from '../About.js/MeetOurTeam';
import OurPartner from '../About.js/OurPartner';
import Whowe from '../About.js/Whowe';
import WhyChooseUs from '../Homes/WhyChooseUs';

const Aboutus = () => {
  return <div>
    <Whowe/>
      <WhyChooseUs/>
      <MeetOurTeam/>
      <OurPartner/>
  </div>;
};

export default Aboutus;
