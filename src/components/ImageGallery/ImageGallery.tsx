import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (small: string) => void;
}

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery_container}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard
            small={image.urls.small}
            description={image.description}
            regular={image.urls.regular}
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}
