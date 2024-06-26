import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { TbFaceIdError } from 'react-icons/tb';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const NotFoundPage = () => {
  return (
    <div className={css.page}>
      <TbFaceIdError size={80} />
      <div className={css.text}>Page is not found</div>
      <Link to="/" className={css.link}>
        Back to home
        <MdOutlineArrowBackIos size={30} className={css.icon} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
