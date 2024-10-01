import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import Modal from 'react-modal';
import AppContainer from '../AppContainer/AppContainer';
import LogoSVG from '../Logo/Logo';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-scroll';
import { MENU_LINKS } from '../../helpers/links';
import s from './Header.module.css';

Modal.setAppElement('#root');

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroled, setIsScrolled] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
      scrollTop > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', throttle(handleScroll, 100));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        style={{
          width: '100vw',
          backgroundColor: isScroled && 'white',
          transition: 'var(--transition)',
        }}
        className={s.header}
      >
        <AppContainer>
          <div
            style={{
              position: 'absolute',
              bottom: '6px',
              left: 0,
              width: `${scrollWidth}%`,
              height: '2px',
              backgroundColor: 'var(--green-color)',
              zIndex: 9999,
              transition: 'var(--transition)',
            }}
          />
          <div
            className={s.headerContainer}
            style={{
              backgroundColor: isScroled && 'white',
              transition: 'var(--transition)',
            }}
          >
            <LogoSVG width={269} height={40} />
            <div className={s.buttonContainer}>
              <Button className="burger" onClick={openModal}>
                <Icons id="menu" stroke="var(--dark-green-color)" fill="none" />
              </Button>

              <Link
                to={MENU_LINKS.contact.link}
                smooth={true}
                duration={2000}
                offset={-50}
              >
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
              </Link>
            </div>
          </div>
        </AppContainer>
      </header>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="urger modal"
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
