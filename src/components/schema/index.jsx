import * as Yup from "yup";

export const contactUsSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name"),
    email: Yup.string().email().required("Please enter a valid email"),
    subject: Yup.string().min(6).required("Please enter the subject"),
    message: Yup.string().min(20).required("Please write something for us"),
});