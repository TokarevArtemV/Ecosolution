import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { throttle } from 'lodash';
import Loader from '../../components/Loader/Loader';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import Modal from 'react-modal';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import AppContainer from '../AppContainer/AppContainer';
import s from './Header.module.css';

Modal.setAppElement('#root');

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth);
    }, 500);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <Logo width={269} height={40} />
        <div className={s.buttonContainer}>
          <Button className="burger" onClick={openModal}>
            <Icons id="menu" stroke="black" fill="none" />
          </Button>
          {windowWidth > 768 && (
            <Button className="getInTouch" title="Get in touch">
              <Icons
                id="arrow"
                size="14"
                stroke="var(--dark-green-color)"
                fill="none"
                rotation="90"
                iconBorderRadius="500"
              />
            </Button>
          )}
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="burger modal"
        className="modal__content"
        overlayClassName="modal__overlay"
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
        <BurgerMenu onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Header;
