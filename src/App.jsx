import AppContainer from './components/AppContainer/AppContainer';
import Header from './components/Header/Header';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import ElectricitySection from './components/Sections/ElectricitySection/ElectricitySection';
import MainSection from './components/Sections/MainSection/MainSection';

function App() {
  return (
    <AppContainer>
      <Header />
      <MainSection />
      <AboutSection />
      <ElectricitySection />
    </AppContainer>
  );
}
export default App;
