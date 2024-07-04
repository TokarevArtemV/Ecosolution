import 'normalize.css';
import s from './AppContainer.module.css';

const AppContainer = ({ children, className = '' }) => {
  const containerClasses = `${s.container} ${className && s[className]}`;

  return <main className={containerClasses}>{children}</main>;
};

export default AppContainer;
