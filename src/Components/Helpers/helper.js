import React from "react";

export const BannerHelp = (props) => {
  return (
    <div className={`${props.className}`}>
      <h3>{props.title}</h3>
    </div>
  );
};

export const CardHelp = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>
    </div>
  );
};
