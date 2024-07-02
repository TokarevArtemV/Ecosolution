import ValueItem from '../Sections/ValueItem/ValueItem';
import image1 from 'assets/images/man-worker-firld-by-solar-panels-1-1x.jpg';
import image1_2x from 'assets/images/man-worker-firld-by-solar-panels-1-2x.jpg';
import image2 from 'assets/images/wind-farms-fields-1-1x.jpg';
import image2_2x from 'assets/images/wind-farms-fields-1-2x.jpg';
import s from './ValuesList.module.css';

const ValuesList = ({ listObj = {} }) => {
  return (
    <ul className={s.section__about_list}>
      {Object.keys(listObj).length > 0 &&
        Object.keys(listObj).map((item, index) => (
          <ValueItem key={index} itemData={listObj[item]} />
        ))}

      <img
        className={`${s.section__about_image_1}`}
        src={image1}
        alt="wind farms fields"
        srcSet={image1_2x}
      />

      <img
        className={`${s.section__about_image_2}`}
        src={image2}
        alt="man worker firld by solar panels"
        srcSet={image2_2x}
      />
    </ul>
  );
};

export default ValuesList;
