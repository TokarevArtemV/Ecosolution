import 'normalize.css';
import s from './AppContainer.module.css';

const AppContainer = ({ children, className }) => {
  const containerClasses = `${s.container} ${s[className]}`;

  return <div className={containerClasses}>{children}</div>;
};

export default AppContainer;
