import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import { List } from './ImageGallery.styled';

let skeleton = [];
for (let i = 0; i < 12; i += 1) {
  skeleton.push(i);
}

export default function ImageGallery({
  images,
  handleOnClickImage,
  isLoading,
}) {
  return (
    <>
      {isLoading && (
        <List>
          {skeleton.map((el, idx) => {
            return <Loader key={idx} />;
          })}
        </List>
      )}
      {!isLoading && images && (
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnClickImage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
