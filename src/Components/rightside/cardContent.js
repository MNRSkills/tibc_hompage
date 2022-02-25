import { getByTitle } from '@testing-library/react';
import React from 'react'
import { SassArgumentList } from 'sass';

const CardContent = (...props) => {
  console.log("FROM CARD CONTENT",...props)

  return (
    <div>{artistCard.title}</div>
  )
}

export default CardContent;