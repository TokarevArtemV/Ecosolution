import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import { ActiveSectionProvider } from './hooks/ActiveSectionContext';

function App() {
  return (
    <ActiveSectionProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
        </Route>

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </ActiveSectionProvider>
  );
}
export default App;
