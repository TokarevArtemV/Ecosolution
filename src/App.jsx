import AppContainer from './components/AppContainer/AppContainer';
import Header from './components/Header/Header';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import MainSection from './components/Sections/MainSection/MainSection';

function App() {
  return (
    <AppContainer>
      <Header />
      <MainSection />
      <AboutSection />
    </AppContainer>
  );
}
export default App;
