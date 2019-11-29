import React from 'react';
import axios from "axios";
import { Formik, Form, Field } from 'formik';

function SearchForm() {
  return (<Formik
    initialValues={{ query: ''}}
    onSubmit={(values, {setSubmitting}) => {
      axios.get('http://localhost:3000/')
        .then(function (response) {
          // handle success
          console.log(response);
        });
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="query" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>);
}

export default SearchForm;
