import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
import s from './Logo.module.css';

const LogoSVG = ({ width = '', height = '', className = '', ...rest }) => {
  return (
    <Link to="/">
      <div
        className={`${s.logoContainer} ${className ? s[className] : ''}`}
        width={width}
        height={height}
      >
        <Icons
          className="logo_svg"
          id="icon-logo"
          size={width}
          height={height}
          fill="var(--dark-green-color)"
          stroke="none"
          {...rest}
        />
      </div>
    </Link>
  );
};

export default LogoSVG;
