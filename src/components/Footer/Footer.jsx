import { Link } from 'react-scroll';
import AppContainer from '../AppContainer/AppContainer';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import LogoSVG from '../Logo/Logo';
import { MENU_LINKS } from '../../helpers/links';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <AppContainer>
        <div className={s.footer_container}>
          <div className={`${s.footer_logo_container}`}>
            <LogoSVG width={269} height={40} />
          </div>
          <div className={s.footer_button_container}>
            <Link to={MENU_LINKS.main.link} smooth={true} duration={2000}>
              <Button className="scrollUp">
                <Icons
                  id="arrow"
                  stroke="var(--dark-green-color)"
                  fill="none"
                  rotation={270}
                />
              </Button>
            </Link>
          </div>

          <div className={s.footer_social_container}>
            <a
              className={s.footer_social_link}
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
              className={s.footer_social_link}
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

          <a
            className={`${s.footer_text} ${s.footer_address}`}
            href="https://www.google.com/maps/search/79005,+Ukraine,+Lviv+Street.+Shota+Rustaveli,+7"
            target="_blank"
            rel="noopener no-referrer"
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>

          <a
            className={`${s.footer_text} ${s.footer_email}`}
            href="mailto:office@ecosolution.com"
          >
            office@ecosolution.com
          </a>

          <p className={`${s.footer_text} ${s.footer_copyright}`}>
            ecosolution &#169; 2023
          </p>
        </div>
      </AppContainer>
    </footer>
  );
};

export default Footer;
