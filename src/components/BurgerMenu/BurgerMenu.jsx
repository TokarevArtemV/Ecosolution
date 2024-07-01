import { useLockBodyScroll } from 'react-use';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import NavigationList from '../NavigationList/NavigationList';
import { MENU_LINKS } from '../../helpers/links';
import s from './BurgerMenu.module.css';

const BurgerMenu = ({ onClose }) => {
  useLockBodyScroll(true);
  return (
    <div className={s.menu_container}>
      <Button className="menu_close__button" onClick={onClose}>
        <Icons
          id="icon-close"
          size="9"
          fill="currentColor"
          stroke="currentColor"
        />
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
    </div>
  );
};

export default BurgerMenu;
