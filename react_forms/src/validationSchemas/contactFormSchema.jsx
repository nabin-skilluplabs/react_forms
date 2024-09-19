import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Please enter valid email address').required('Email is required').matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Not a valid email address'),
    message: yup.string().required('Message is required').min(20, 'Message should be at least 20 characters long').max(200,'Message should be less than 200 characters long'),
    agreed: yup.string().oneOf(['true'], 'You should agree with privacy policy to submit this form')
})
  .required();

export default schema;