import { Link } from 'react-scroll';
import Section from '../Section';
import FaqList from '../../FaqList/FaqList';
import Button from '../../Button/Button';
import Icons from '../../Icons/Icons';
import { MENU_LINKS } from '../../../helpers/links';
import { FAQ_LIST } from '../../../helpers/faqList.js';
import s from './FaqSection.module.css';

const FaqSection = () => {
  return (
    <Section item={MENU_LINKS.faq}>
      <h2 className={s.section__faq_title}>Frequently Asked Questions</h2>
      <FaqList listData={FAQ_LIST} />
      <div className={s.section__faq__button_container}>
        <p className={s.section__faq_title__text}>
          Didn't find the answer to your question?
        </p>
        <Link
          to={MENU_LINKS.contact.link}
          smooth={true}
          duration={1000}
          offset={-50}
        >
          <Button className="contactUs" title="Contact Us">
            <Icons
              id="arrow"
              size="14"
              stroke="var(--dark-green-color)"
              fill="none"
              rotation="90"
              iconBorderRadius="500"
            />
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default FaqSection;
