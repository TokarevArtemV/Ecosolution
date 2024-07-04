import CarouselSlaider from '../../CarouselSlider/CarouselSlider';
import { MENU_LINKS } from '../../../helpers/links';
import s from './CasesSection.module.css';

const OPTIONS = { align: 'start', dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CasesSection = () => {
  return (
    <section id={MENU_LINKS.cases.link} className={s.section__cases}>
      <h2 className={s.section__cases_title}>
        Successful cases of our company
      </h2>
      <CarouselSlaider slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default CasesSection;
