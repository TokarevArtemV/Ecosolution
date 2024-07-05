import * as Yup from 'yup';

const fullNameRegExp = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const digitsOnlyRegExp = /^\d+$/;

export const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(fullNameRegExp, 'Wrong Full name')
    .min(3, 'Full name must be at least 3 characters long')
    .max(50, 'Full name must be at most 50 characters long')
    .required('Full name is required'),
  email: Yup.string().email('Wrong Email').required('Email is required'),
  phone: Yup.string()
    .matches(digitsOnlyRegExp, 'Wrong phone')
    .length(12, 'Phone number must be exactly 12 digits')
    .required('Phone number is required'),
});
