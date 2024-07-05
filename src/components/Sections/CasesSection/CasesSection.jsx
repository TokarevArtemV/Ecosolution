import CarouselSlaider from '../../CarouselSlider/CarouselSlider';
import { MENU_LINKS } from '../../../helpers/links';
import { CASES_LIST } from '../../../helpers/cases';
import s from './CasesSection.module.css';

const OPTIONS = { align: 'start', dragFree: true, loop: true };

const CasesSection = () => {
  return (
    <section id={MENU_LINKS.cases.link} className={s.section__cases}>
      <h2 className={s.section__cases_title}>
        Successful cases of our company
      </h2>
      <CarouselSlaider slides={CASES_LIST} options={OPTIONS} />
    </section>
  );
};

export default CasesSection;
