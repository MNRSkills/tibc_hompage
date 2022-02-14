import React from "react";
import Highlight from "./Rightside/highlights";
import Video from "./Leftside/video";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <Highlight className="home-page"/>
    <Video className="home-page__player"/>
    </div>
  );
};

export default HomePage;
