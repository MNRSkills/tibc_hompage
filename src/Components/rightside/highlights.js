import React from "react";
import Card from "../Helpers/Card";
import CardContent from "./cardContent";
import { BannerHelp } from "../Helpers/helper";
const Highlight = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: " Artists",
      subtitle: "2015 music choice recording artist",
      description: "Meet artist and producers, and listen to the latest music.",
    },
    {
      id: 2,
      title: "Gratitude",
      subtitle: "gratitude project concert",
      description: "everythursday and sometimes sundays",
    },
    {
      id: 3,
      title: "Giving",
      subtitle: "Kickstarter",
      description: "giving is the ultimate feeling",
    },
    {
      id: 4,
      title: "Sharing",
      subtitle: "Join the TIBC community",
      description: "giving is the ultimate feeling",
    },
  ];

  return (
    <div className={`${props.className} highlights`}>
      <BannerHelp title='highlights' className='section-banner' />
      {DUMMY_DATA.map((artist, index) => {
        return (
          <Card key={index}>
            <CardContent artistCard={artist}/>
          </Card>
        );
      })}
    </div>
  );
};

export default Highlight;
