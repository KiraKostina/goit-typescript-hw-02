import css from './ImageCard.module.css';

interface ImageCardProps {
  small: string;
  regular: string;
  description: string;
  onClick: (regular: string) => void;
}

export default function ImageCard({
  small,
  regular,
  description,
  onClick,
}: ImageCardProps) {
  const handleClick = () => {
    onClick(regular);
  };

  return (
    <div>
      <img
        className={css.gallery_image}
        src={small}
        alt={description}
        onClick={handleClick}
      />
    </div>
  );
}
