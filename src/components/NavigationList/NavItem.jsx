import { Link } from 'react-scroll';
import { useActiveSection } from '../../hooks/ActiveSectionContext';
import Icons from '../Icons/Icons';
import s from './NavItem.module.css';

const NavItem = ({ title, link, skipItem = false, onClose }) => {
  const { activeSection } = useActiveSection();

  if (skipItem) return;

  return (
    <li
      className={`${s.nav__list_item}  ${activeSection === link && s.active}`}
    >
      <Link
        className={s.nav__list_link}
        to={link}
        smooth={true}
        duration={1000}
        onClick={onClose}
        offset={-50}
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
