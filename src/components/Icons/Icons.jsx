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
      ...(rotation && { transform: `rotate(${rotation}deg)` }),
      ...(iconBorderRadius && { borderRadius: `${iconBorderRadius}px` }),
      ...(bgColor && { backgroundColor: bgColor }),
    }}
  >
    <use href={`${IconsSprite}#${id}`} />
  </svg>
);

export default Icons;
