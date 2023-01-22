import React from 'react';
// import PropTypes from 'prop-types';
import { ListItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  handleOnClickImage,
}) {
  return (
    <ListItem onClick={() => handleOnClickImage(largeImageURL)}>
      <Image src={webformatURL} alt="" />
    </ListItem>
  );
}

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
//   userId: PropTypes.string.isRequired,
// };
