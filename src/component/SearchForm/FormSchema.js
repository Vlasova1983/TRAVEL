import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')    
  //   .required('invalid input'),  
  checkin_date:Yup.string()   
    .required('invalid input'),
  checkout_date:Yup.string()   
    .required('invalid input'),
  adults_number:Yup.string()   
    .required('invalid input'),
});

export default FormSchema;