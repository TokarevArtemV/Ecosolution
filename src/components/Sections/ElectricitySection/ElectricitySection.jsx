import Section from '../Section';
import ElectricityCounter from '../../ElectricityCounter/ElectricityCounter';
import { MENU_LINKS } from '../../../helpers/links';
import s from './ElectricitySection.module.css';

const ElectricitySection = () => {
  return (
    <Section item={MENU_LINKS.electricity}>
      <h2 className={s.section__electricity_title}>
        Electricity we produced for all time
      </h2>
      <ElectricityCounter />
    </Section>
  );
};

export default ElectricitySection;
