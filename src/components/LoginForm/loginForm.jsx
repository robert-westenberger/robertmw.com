import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function LoginForm({ setUserIsAuthenticated }) {
  return (<Formik
    initialValues={{ username: '', password: ''}}
    validate={values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }}
    onSubmit={({ username, password }, {setSubmitting}) => {
      axios.post('http://localhost:3000/login',
        {username, password })
        .then(function (response) {
          if (response.status === 200) {
            setUserIsAuthenticated(true);
          }
        });
      setSubmitting(false);
    }}
  >
    {({ isSubmitting, errors, values, touched }) => (
      <Form>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </Form>
    )}
  </Formik>);
}

export default LoginForm;
