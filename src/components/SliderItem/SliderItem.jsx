import { useEffect, useState } from 'react';
import Icons from '../Icons/Icons';
import s from './SliderItem.module.css';
import Button from '../Button/Button';

const SliderItem = ({ itemData = {} }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageSrc2x, setImageSrc2x] = useState('');
  const { title, address, image, text, date } = itemData;

  useEffect(() => {
    const loadImages = async () => {
      try {
        const img = await import(`../../assets/images/${image}.jpg`);
        const img2x = await import(`../../assets/images/${image}-2x.jpg`);

        setImageSrc(img.default);
        setImageSrc2x(img2x.default);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [image]);

  return (
    <div className={s.section__cases_slider_item}>
      <img
        className={s.section__cases_slider_item_img}
        src={imageSrc}
        alt={title}
        srcSet={`${imageSrc2x} 2x`}
      />

      <div className={s.section__cases_slider_item_info_container}>
        <h3 className={s.section__cases_slider_item_info_title}>
          {address} <br />
          {title}
        </h3>
        <Button className="section__cases_slider_item_button">
          <Icons
            id="arrow"
            size="36"
            stroke="currentColor"
            fill="none"
            rotation={315}
          />
        </Button>
        <div className={s.section__cases_slider_item_element}></div>
        <p className={s.section__cases_slider_item_info_text}>{text}</p>
        <p className={s.section__cases_slider_item_info_date}>{date}</p>
      </div>
    </div>
  );
};

export default SliderItem;
