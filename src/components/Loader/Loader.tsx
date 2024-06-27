import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader_wrapper}>
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
