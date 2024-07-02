import { useEffect, useState } from 'react';
import counterKWH from '../../helpers/counterKWH';
import s from './ElectricityCounter.module.css';

const ElectricityCounter = () => {
  const [kWh, setKWH] = useState(() => counterKWH());

  useEffect(() => {
    const interval = setTimeout(() => {
      setKWH(counterKWH());
    }, 1000);

    return () => clearInterval(interval);
  }, [kWh]);

  return (
    <div className={s.section__electricity_counter_container}>
      <span className={s.section__electricity_counter}>
        {kWh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      </span>
      <p className={s.section__electricity_text}>kWh</p>
    </div>
  );
};

export default ElectricityCounter;
