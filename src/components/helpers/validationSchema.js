import * as Yup from "yup";


export const contactsValidationSchema = Yup.object().shape({
name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*"),
number: Yup.string().matches(/^[0-9]{10}$/,'Номер має містити 10 цифр').required('*'),
});

export const authValidationSchema = Yup.object().shape({
email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*"),
password: Yup.string().matches(/^[0-9]{<=7}$/,'parol має містити bilshe 7 цифр').required('*'),
});

