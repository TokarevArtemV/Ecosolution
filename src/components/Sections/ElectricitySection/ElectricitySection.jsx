import ElectricityCounter from '../../ElectricityCounter/ElectricityCounter';
import s from './ElectricitySection.module.css';

const ElectricitySection = () => {
  return (
    <section className={s.section__electricity}>
      <h2 className={s.section__electricity_title}>
        Electricity we produced for all time
      </h2>
      <ElectricityCounter />
    </section>
  );
};

export default ElectricitySection;
