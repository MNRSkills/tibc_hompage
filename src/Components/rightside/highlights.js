import React from "react";
import { BannerHelp } from "../Helpers/helper";
import Card from "./artistCard";
const Highlight = (props) => {
const DUMMY_DATA = [
    {
        "title":" Artists",
        "subtitle": "2015 music choice recording artist",
        "description": "Meet artist and producers, and listen to the latest music."
    },
    {
        "title":"Gratitude",
        "subtitle": "gratitude project concert",
        "description": "everythursday and sometimes sundays"
    },
    {
        "title":"Giving",
        "subtitle": "Kickstarter",
        "description": "giving is the ultimate feeling"
    },
    {
      "title":"Sharing",
      "subtitle": "Join the TIBC community",
      "description": "giving is the ultimate feeling"
    }
]

  return (
    <div className={`${props.className} highlights`}>
      <BannerHelp title="highlights" className="section-banner"/>
      {DUMMY_DATA.map((artist, index) => {
        return <Card artist={artist} key={index}/>
      })}
    </div>
  );
};

export default Highlight;
