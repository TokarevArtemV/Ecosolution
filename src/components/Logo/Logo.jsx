import s from './Logo.module.css';
import { ReactComponent as Logo } from 'assets/logo.svg';

const LogoSVG = ({ width = '', height = '', className = '#' }) => {
  return (
    <div
      className={`${s.logoContainer} ${className ? s[className] : ''}`}
      width={width}
      height={height}
    >
      <Logo width={width} height={height} />
    </div>
  );
};

export default LogoSVG;
