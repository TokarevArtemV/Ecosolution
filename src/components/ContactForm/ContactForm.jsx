import { useState } from 'react';
import Modal from 'react-modal';
import { Formik, Field } from 'formik';
import Button from '../Button/Button.jsx';
import Icons from '../Icons/Icons.jsx';
import { FormSchema } from '../../helpers/validationShema.js';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (value, action) => {
    action.resetForm();
    openModal();
  };

  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            isValid,
            dirty,
            errors,
            touched,
          } = formik;
          return (
            <form className={s.section__contact_form} onSubmit={handleSubmit}>
              <div className={s.section__contact_form_input_container}>
                <label
                  className={s.section__contact_form_label}
                  htmlFor="fullName"
                >
                  * Full name:
                </label>
                <Field
                  className={`${s.section__contact_form_input} ${
                    touched.fullName && errors.fullName && s.error
                  }`}
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Rosie"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Name should be 3 chars minimum, example `Art`"
                />
                {errors.fullName && touched.fullName ? (
                  <div className={s.section__contact_form_error_container}>
                    {errors.fullName}
                  </div>
                ) : null}
              </div>
              <div className={s.section__contact_form_input_container}>
                <label
                  className={s.section__contact_form_label}
                  htmlFor="email"
                >
                  * E-mail:
                </label>
                <Field
                  className={`${s.section__contact_form_input} ${
                    touched.email && errors.email && s.error
                  }`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johnrosie@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Email should be valid, example `user@mail.com`"
                />
                {errors.email && touched.email ? (
                  <div className={s.section__contact_form_error_container}>
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className={s.section__contact_form_input_container}>
                <label
                  className={s.section__contact_form_label}
                  htmlFor="phone"
                >
                  * Phone:
                </label>
                <Field
                  className={`${s.section__contact_form_input} ${
                    touched.phone && errors.phone && s.error
                  }`}
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="380961234567"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Phone should be valid, example `380501234567`"
                />
                {errors.phone && touched.phone ? (
                  <div className={s.section__contact_form_error_container}>
                    {errors.phone}
                  </div>
                ) : null}
              </div>
              <div className={s.section__contact_form_input_container}>
                <label
                  className={s.section__contact_form_label}
                  htmlFor="message"
                >
                  Message:
                </label>
                <Field
                  className={s.section__contact_form_area}
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Enter your message"
                />
              </div>

              <Button
                className="learnMore"
                title={'Send'}
                type="submit"
                isDisabled={!(dirty && isValid)}
              >
                <div className={s.section__contact_form_button_icon_container}>
                  <Icons
                    id="arrow"
                    fill="none"
                    stroke="var(--dark-green-color)"
                  />
                </div>
              </Button>
            </form>
          );
        }}
      </Formik>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="form modal"
        className="modal__form_content"
        overlayClassName="modal__form_overlay"
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
        <div className="modal_form_container">
          <p className="modal_form_text">
            Thank you for your interest in our organization! <br /> Our manager
            will contact you soon.
          </p>
          <Button
            className="modal_form_button"
            onClick={() => closeModal()}
            title={'ok'}
          />
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
