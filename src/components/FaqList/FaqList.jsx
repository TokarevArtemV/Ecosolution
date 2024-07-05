import { useState } from 'react';
import FaqItem from '../FaqItem/FaqItem';
import s from './FaqList.module.css';

const FaqList = ({ listData = [] }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleActiveItem = (index) => {
    activeItem === index ? setActiveItem(null) : setActiveItem(index);
  };

  return (
    <ul className={s.section__faq_list}>
      {listData.map((question, index) => (
        <FaqItem
          itemData={question}
          key={index}
          index={index}
          activeItem={activeItem}
          handleActiveItem={handleActiveItem}
        />
      ))}
    </ul>
  );
};

export default FaqList;
