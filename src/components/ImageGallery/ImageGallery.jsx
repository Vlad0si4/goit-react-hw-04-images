import React from 'react';
import { StyledGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images = [] }) => {
  return (
    <StyledGallery>
      {images.map(image => (
        <ImageGalleryItem {...image} key={image.id} />
      ))}
    </StyledGallery>
  );
};

ImageGallery.propType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
