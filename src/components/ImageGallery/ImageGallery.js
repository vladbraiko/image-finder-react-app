import React from 'react';
import Proptypes, { shape } from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, click }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} className={styles.ImageGalleryItem}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              tags={tags}
              click={click}
              largeImageURL={largeImageURL}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: Proptypes.arrayOf(shape({ id: Proptypes.number.isRequired }))
    .isRequired,
};

export default ImageGallery;
