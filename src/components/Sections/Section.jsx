import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../../hooks/ActiveSectionContext';
import { useEffect } from 'react';
import s from './Section.module.css';

const Section = ({ item, children }) => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { link } = item;

  useEffect(() => {
    if (inView) setActiveSection(link);
  });

  return (
    <section ref={ref} id={link} className={`${s[`section__${link}`]}`}>
      {children}
    </section>
  );
};

export default Section;
