import React from 'react';
import { Item, Image } from './PicturesItem.styled';

export const PictureItem = ({ id, webformatURL, type, handleOpenModal }) => {
  return (
    <Item>
      <Image
        width="300px"
        src={webformatURL}
        alt={type}
        onClick={() => handleOpenModal(webformatURL, type)}
      />
    </Item>
  );
};
