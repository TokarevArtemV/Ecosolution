import IconsSprite from 'assets/icons/sprite.svg';
import s from './Icons.module.css';

const Icons = ({
  id,
  className = '#',
  size = '16',
  height = '',
  fill = 'black',
  stroke = 'black',
  rotation = 0,
  iconBorderRadius = 0,
  bgColor = '',
}) => (
  <svg
    className={s[className]}
    width={size}
    height={height ? height : size}
    fill={fill}
    stroke={stroke}
    style={{
      transform: `rotate(${rotation}deg)`,
      borderRadius: `${iconBorderRadius}px`,
      backgroundColor: bgColor ? bgColor : '',
    }}
  >
    <use href={`${IconsSprite}#${id}`} />
  </svg>
);

export default Icons;
