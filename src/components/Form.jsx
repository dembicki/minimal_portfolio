import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Input = styled.input`
  font-size: 1.1rem;
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

const Textarea = styled.textarea`
  font-size: 1.1rem;
  border: 1px solid white;
  height: 250px;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bolder;
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const Error = styled.div`
  padding: 0.5rem;
  border: 1px solid #f44336;
  opacity: 0.8;
  margin-top: 0.5rem; ;
`;

const Form = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name field is required")
        .min(3, "Name must be longer than 3 characters")
        .max(30, "Name must be shorter than 30 characters"),
      companyName: Yup.string()
        .required("Company name field is required")
        .min(2, "Company name must be longer than 2 characters")
        .max(30, "Company name must be shorter than 30 characters"),
      email: Yup.string()
        .required("Email field is required")
        .email("This is not valid email")
        .min(3, "Email must be longer than 3 characters"),
      message: Yup.string()
        .required("Message is required")
        .min(5, "Message must be longer than 5 characters"),
    }),
    onSubmit: ({ name, message, companyName }) => {
      // eslint-disable-next-line no-alert
      alert(`name: ${name}, company name: ${companyName}, message: ${message}`);
    },
  });

  return (
    <CustomForm onSubmit={handleSubmit}>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        placeholder="name"
      />
      {touched.name && errors.name ? <Error>{errors.name}</Error> : null}
      <Input
        id="companyName"
        name="companyName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.companyName}
        placeholder="company name"
      />
      {touched.companyName && errors.companyName ? (
        <Error>{errors.companyName}</Error>
      ) : null}
      <Input
        id="email"
        name="email"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        placeholder="email"
      />
      {touched.email && errors.email ? <Error>{errors.email}</Error> : null}
      <Textarea
        id="message"
        name="message"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.message}
        placeholder="your message.."
      />
      {touched.message && errors.message ? (
        <Error>{errors.message}</Error>
      ) : null}
      <Button type="submit">Submit</Button>
    </CustomForm>
  );
};

export default Form;
