import React from 'react';
import styles from './ImageGalleryItem.module.css';
import Proptypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, click, largeImageURL }) => {
  return (
    <>
      <a href={largeImageURL} onClick={click}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItem_image}
        />
      </a>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: Proptypes.string.isRequired,
  tags: Proptypes.string.isRequired,
  click: Proptypes.func.isRequired,
  largeImageURL: Proptypes.string.isRequired,
};

export default ImageGalleryItem;
