import AppContainer from './components/AppContainer/AppContainer';
import Header from './components/Header/Header';
import MainSection from './components/Sections/MainSection/MainSection';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import ElectricitySection from './components/Sections/ElectricitySection/ElectricitySection';
import CasesSection from './components/Sections/CasesSection/CasesSection';
import FaqSection from './components/Sections/FaqSection/FaqSection';

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <MainSection />
        <AboutSection />
        <ElectricitySection />
        <CasesSection />
        <FaqSection />
      </AppContainer>
    </>
  );
}
export default App;
