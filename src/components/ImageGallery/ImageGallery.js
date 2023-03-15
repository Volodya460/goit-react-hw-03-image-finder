import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ images, openModal }) {
  return (
    <Gallery>
      {images.map(el => {
        return <ImageGalleryItem arrr={el} key={el.id} openModal={openModal} />;
      })}
    </Gallery>
  );
}
