import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("Geçerli email girin!").required("Zorunlu alan!"),
  password: yup
    .string()
    .min(5, "en az 5 karakter girilmeli")
    .required("Zorunlu alan!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan!"),
});

export default validationSchema;
