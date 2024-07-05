import Icons from '../Icons/Icons';
import s from './ContactList.module.css';

const ContactList = () => {
  return (
    <address className={s.section__contact_container}>
      <div>
        <p className={s.section__contact_text}>Phone:</p>
        <ul className={s.section__contact_list}>
          <li className={s.section__contact_list_item}>
            <a
              className={s.section__contact_list_item_link}
              href="tel:+380981234567"
            >
              <Icons
                id="call"
                size="24"
                fill="transparent"
                stroke="currentColor"
              />
              38 (098) 12 34 567
            </a>
          </li>
          <li className={s.section__contact_list_item}>
            <a
              className={s.section__contact_list_item_link}
              href="tel:+380931234567"
            >
              <Icons
                id="call"
                size="24"
                fill="transparent"
                stroke="currentColor"
              />
              38 (093) 12 34 567
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className={s.section__contact_text}>E-mail:</p>
        <a
          className={s.section__contact_list_item_link}
          href="mailto:office@ecosolution.com"
        >
          <Icons id="sms" size="24" fill="transparent" stroke="currentColor" />
          office@ecosolution.com
        </a>
      </div>
      <div>
        <p className={s.section__contact_text}>Address:</p>
        <a
          className={s.section__contact_list_item_link}
          href="https://www.google.com/maps/search/79005,+Ukraine,+Lviv+Street.+Shota+Rustaveli,+7"
          target="_blank"
          rel="noopener no-referrer"
        >
          <Icons id="map" size="24" fill="transparent" stroke="currentColor" />
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
      </div>
      <div className={s.section__contact_social}>
        <p className={s.section__contact_text}>Social Networks:</p>

        <a
          className={s.section__contact_social_link}
          href="https://www.facebook.com/profile.php?id=100064290240877"
          target="_blanc"
          rel="noopener no-referrer"
        >
          <Icons
            id="facebook"
            size="24"
            fill="transparent"
            stroke="currentColor"
          />
        </a>
        <a
          className={s.section__contact_social_link}
          href="https://www.instagram.com/"
          target="_blanc"
          rel="noopener no-referrer"
        >
          <Icons
            id="instagram"
            size="24"
            fill="transparent"
            stroke="currentColor"
          />
        </a>
      </div>
    </address>
  );
};

export default ContactList;
