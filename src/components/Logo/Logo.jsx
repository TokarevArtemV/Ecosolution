import Icons from '../Icons/Icons';
import s from './Logo.module.css';

const LogoSVG = ({ width = '', height = '', className = '', ...rest }) => {
  return (
    <div
      className={`${s.logoContainer} ${className ? s[className] : ''}`}
      width={width}
      height={height}
    >
      <Icons
        id="icon-logo"
        size={width}
        height={height}
        fill="none"
        stroke="none"
        {...rest}
      />
    </div>
  );
};

export default LogoSVG;
