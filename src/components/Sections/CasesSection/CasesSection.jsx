import Section from '../Section';
import CarouselSlaider from '../../CarouselSlider/CarouselSlider';
import { MENU_LINKS } from '../../../helpers/links';
import { CASES_LIST } from '../../../helpers/cases';
import s from './CasesSection.module.css';

const OPTIONS = { align: 'start', dragFree: false, loop: true };

const CasesSection = () => {
  return (
    <Section item={MENU_LINKS.cases}>
      <h2 className={s.section__cases_title}>
        Successful cases of our company
      </h2>
      <CarouselSlaider slides={CASES_LIST} options={OPTIONS} />
    </Section>
  );
};

export default CasesSection;
