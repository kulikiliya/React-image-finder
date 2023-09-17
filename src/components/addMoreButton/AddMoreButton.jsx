import React from 'react';
import { AddButton } from './AddMoreButton.styled';

export const AddMoreButton = ({ loadMore }) => {
  return <AddButton onClick={loadMore}>Load More</AddButton>;
};
