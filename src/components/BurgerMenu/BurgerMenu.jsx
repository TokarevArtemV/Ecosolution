import { useLockBodyScroll } from 'react-use';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import NavigationList from '../NavigationList/NavigationList';
import { MENU_LINKS } from '../../helpers/links';
import s from './BurgerMenu.module.css';

const BurgerMenu = ({ onClose }) => {
  useLockBodyScroll(true);
  return (
    <div className={s.menu__container}>
      <Button className="menu_close__button" onClick={onClose}>
        <Icons id="close" size="9" fill="currentColor" stroke="currentColor" />
        <p
          style={{
            color: 'currentColor',
            fontSize: '20px',
            letterSpacing: '-0.8px',
          }}
        >
          close
        </p>
      </Button>
      <NavigationList itemList={MENU_LINKS} onClose={onClose} />
      <div className={s.menu__container_contacts}>
        <a
          href="https://www.facebook.com/profile.php?id=100064290240877"
          target="_blanc"
          rel="noopener no-referrer"
        >
          <Icons
            id="facebook"
            size="24"
            fill="transparent"
            stroke="currentColor"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blanc"
          rel="noopener no-referrer"
        >
          <Icons
            id="instagram"
            size="24"
            fill="transparent"
            stroke="currentColor"
          />
        </a>
      </div>
    </div>
  );
};

export default BurgerMenu;
