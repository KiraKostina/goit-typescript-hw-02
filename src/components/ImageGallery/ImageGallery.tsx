import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export interface ImageFromGallery {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: ImageFromGallery[];
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
