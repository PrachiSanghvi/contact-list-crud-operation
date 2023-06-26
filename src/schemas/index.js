import * as Yup from 'yup'

// Contact form validation schema

export const contactFormSchema = Yup.object({
  name: Yup.string().min(3).max(25).required(),
  role: Yup.string().min(3).max(25).required(),
  email: Yup.string().email('Please enter valid email').required(),
  phone: Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required(),
  // phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
  company: Yup.string().min(3).max(25).required(),
  address: Yup.string().min(3).max(25).required(),
})