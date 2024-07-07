import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import AppContainer from '../AppContainer/AppContainer';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <AppContainer>
          <Suspense>
            <Outlet />
          </Suspense>
        </AppContainer>
      </main>
      <AppContainer>
        <Footer />
      </AppContainer>
    </>
  );
};

export default SharedLayout;
