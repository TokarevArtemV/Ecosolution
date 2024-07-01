import { Link } from 'react-scroll';
import Icons from '../Icons/Icons';
import s from './NavItem.module.css';

const NavItem = ({ title, link, onClose }) => {
  return (
    <li className={s.nav__list_item}>
      <Link
        className={s.nav__list_link}
        to={link}
        smooth={true}
        duration={1000}
        onClick={onClose}
      >
        {title}
      </Link>
      <Icons
        id="arrow"
        rotation={315}
        size="16"
        fill="none"
        stroke="currentColor"
      />
    </li>
  );
};

export default NavItem;
