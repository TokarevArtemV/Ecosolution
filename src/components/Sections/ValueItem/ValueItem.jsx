import Icons from '../../Icons/Icons';
import s from './ValueItem.module.css';

const ValueItem = ({ itemData = {} }) => {
  return (
    <li className={s.section__about_item}>
      <h3 className={s.section__about_item_title}>
        <Icons
          id={itemData.icon}
          fill="none"
          stroke="var(--dark-green-color)"
        />
        {itemData.title}
      </h3>
      <p className={s.section__about_item_text}>{itemData.text}</p>
    </li>
  );
};

export default ValueItem;
