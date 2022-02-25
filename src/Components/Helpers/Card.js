import React from "react";

const Card = ({ children }) => {
  console.log("PROPS FROM ARTIST CARD", { children });

  return <div className={`card-detail`}>{children}</div>;
};

export default Card;
