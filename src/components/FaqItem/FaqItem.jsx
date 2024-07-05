import { useEffect, useRef, useState } from 'react';
import Icons from '../Icons/Icons';
import s from './FaqItem.module.css';

const FaqItem = ({ itemData, activeItem, index, handleActiveItem }) => {
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const isActive = () => (index === activeItem ? true : false);

  useEffect(() => {
    if (activeItem === index) {
      if (contentRef.current) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    } else {
      setHeight('0px');
    }
  }, [activeItem, index]);

  return (
    <li className={s.section__faq_item} onClick={() => handleActiveItem(index)}>
      <h3 className={s.section__faq_item__title}>
        <Icons
          className="section__faq_item__icon"
          id={isActive() ? 'minus' : 'add'}
          stroke={isActive() ? 'currentColor' : 'var(--green-color)'}
        />
        {itemData.title}
      </h3>
      {isActive() && (
        <div
          ref={contentRef}
          className={`${s.section__faq_item__content}`}
          style={{ height }}
        >
          <p className={`${s.section__faq_item__text}`}>{itemData.text}</p>
        </div>
      )}
    </li>
  );
};

export default FaqItem;
