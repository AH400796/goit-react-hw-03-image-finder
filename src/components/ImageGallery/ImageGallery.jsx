import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export default function ImageGallery({
  images,
  handleOnClickImage,
  isLoading,
}) {
  return (
    <>
      {images && (
        <List>
          {images.map(image => {
            const { id, webformatURL, largeImageURL } = image;
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                handleOnClickImage={handleOnClickImage}
              />
            );
          })}
        </List>
      )}
    </>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
