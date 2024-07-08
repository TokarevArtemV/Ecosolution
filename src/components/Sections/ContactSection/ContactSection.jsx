import Section from '../Section';
import ContactForm from '../../ContactForm/ContactForm';
import ContactList from '../../ContactList/ContactList';
import { MENU_LINKS } from '../../../helpers/links';
import s from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <Section item={MENU_LINKS.contact}>
      <h2 className={s.section__contact_title}>Contact us</h2>
      <ContactList />
      <ContactForm />
    </Section>
  );
};

export default ContactSection;
