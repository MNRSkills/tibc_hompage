import React from "react";

const Card = (props) => {
  const { title, subtitle, description } = props.artist;
  return (
    <div className='card-detail'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
