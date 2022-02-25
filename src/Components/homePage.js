import React from "react";
import Highlight from "./Rightside/highlights";
import Video from "./Leftside/video";
import Card from "./Helpers/Card";

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Home Page</h1>
      <Highlight className='home-page' />
      <Video className='home-page__player' />
      {/* <Card
        className='home-page__card-description'
        title='commercial Multimidia production services povided by tibc'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ex
        odio. Proin quis justo tortor. Nunc laoreet in dui scelerisque laoreet.
        Interdum et malesuada fames ac ante ipsum'
      /> */}
    </div>
  );
};

export default HomePage;
