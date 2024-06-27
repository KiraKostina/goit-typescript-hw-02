import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}
export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div>
      <button className={css.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
