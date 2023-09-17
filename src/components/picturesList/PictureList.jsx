import React from 'react';
import { PictureItem } from '../pictureItem/PicturesItem';
import { ListWrapper } from './PictureList.styled';

export const PictureList = ({ data = [], handleOpenModal }) => {
  return (
    <ListWrapper>
      {data.map(picture => {
        return (
          <PictureItem
            {...picture}
            key={picture.id}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </ListWrapper>
  );
};
