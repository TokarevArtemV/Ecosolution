import Button from '../../Button/Button';
import Icons from '../../Icons/Icons';
import { MENU_LINKS } from '../../../helpers/links.js';
import s from './MainSection.module.css';
import { Link } from 'react-scroll';

const MainSection = () => {
  return (
    <section id={MENU_LINKS.main.link} className={s.section__main}>
      <div className={s.section__main_text_container}>
        <h1 className={s.section__main_title}>RENEWABLE ENERGY For any task</h1>
        <p className={s.section__main_text}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <Link
          to={MENU_LINKS.cases.link}
          smooth={true}
          duration={1000}
          offset={-50}
        >
          <Button className="learnMore" title={'Learn more'}>
            <div className={s.button__icon_container}>
              <Icons id="arrow" fill="none" stroke="var(--dark-green-color)" />
            </div>
          </Button>
        </Link>
      </div>
      <div className={s.section__main_info_container}>
        <address className={s.section__main_address}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <a
          className={s.section__main_mail}
          href="mailto:office@ecosolution.com"
        >
          office@ecosolution.com
        </a>
        <p className={s.section__main_ownership}>ecosolution &#169; 2023</p>
      </div>
      <div className={s.section__main_image_container}></div>
    </section>
  );
};

export default MainSection;
