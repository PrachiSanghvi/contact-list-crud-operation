import * as Yup from 'yup'

// Contact form validation schema
export const contactFormSchema = Yup.object({
  name: Yup.string().min(3).max(25).required(),
  role: Yup.string().min(3).max(25).required(),
  email: Yup.string().min(3).max(25).required(),
  phone: Yup.string().min(3).max(25).required(),
  company: Yup.string().min(3).max(25).required(),
  address: Yup.string().min(3).max(25).required(),
})