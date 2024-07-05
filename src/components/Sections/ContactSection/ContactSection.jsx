import { MENU_LINKS } from '../../../helpers/links';
import ContactForm from '../../ContactForm/ContactForm';
import ContactList from '../../ContactList/ContactList';
import s from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id={MENU_LINKS.contact.link} className={s.section__contact}>
      <h2 className={s.section__contact_title}>Contact us</h2>
      <ContactList />
      <ContactForm />
    </section>
  );
};

export default ContactSection;
