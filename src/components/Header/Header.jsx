import { useState } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import Modal from 'react-modal';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import s from './Header.module.css';

Modal.setAppElement('#root');

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Icons id="menu" stroke="var(--dark-green-color)" fill="none" />
          </Button>

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
        </div>
      </header>

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
