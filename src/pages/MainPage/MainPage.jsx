import AboutSection from '../../components/Sections/AboutSection/AboutSection';
import CasesSection from '../../components/Sections/CasesSection/CasesSection';
import ContactSection from '../../components/Sections/ContactSection/ContactSection';
import ElectricitySection from '../../components/Sections/ElectricitySection/ElectricitySection';
import FaqSection from '../../components/Sections/FaqSection/FaqSection';
import MainSection from '../../components/Sections/MainSection/MainSection';

const MainPage = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default MainPage;
