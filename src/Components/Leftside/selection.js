import React from "react";
import Card from "../Layout/card";
const listOfSomething = [
  "jackson gave",
  "jackson gave",
  "jackson gave",
  "../../../public/images/pexels-jill-wellington.jpeg",
  "../../../public/images/pexels-jill-wellington.jpeg",
  "../../../public/images/pexels-jill-wellington.jpeg"
];

const Selection = () => {
  return <div>{listOfSomething.map((something, index) => {
    return <Card something={something} key={index}/>
  })}
    Photo by Jill Wellington from Pexels
  </div>;
};

export default Selection;
