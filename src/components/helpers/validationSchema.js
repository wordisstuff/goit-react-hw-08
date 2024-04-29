import * as Yup from "yup";


const validationSchema = Yup.object().shape({
name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*"),
number: Yup.string().matches(/^[0-9]{10}$/,'Номер має містити 10 цифр').required('*'),
});

export default validationSchema;