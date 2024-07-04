import AppContainer from './components/AppContainer/AppContainer';
import Header from './components/Header/Header';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import CasesSection from './components/Sections/CasesSection/CasesSection';
import ElectricitySection from './components/Sections/ElectricitySection/ElectricitySection';
import MainSection from './components/Sections/MainSection/MainSection';

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <MainSection />
        <AboutSection />
        <ElectricitySection />
        <CasesSection />
      </AppContainer>
    </>
  );
}
export default App;
