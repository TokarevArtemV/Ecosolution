import ValuesList from '../../ValuesList/ValuesList';
import { MENU_LINKS } from '../../../helpers/links';
import { VALUES_LIST } from '../../../helpers/values.js';
import s from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id={MENU_LINKS.about.link} className={s.section__about}>
      <div className={s.section__about_title_container}>
        <h2 className={s.section__about_title}>Main values of our company</h2>
        <p className={s.section__about_text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
        <ValuesList listObj={VALUES_LIST} />
      </div>
    </section>
  );
};

export default AboutSection;
