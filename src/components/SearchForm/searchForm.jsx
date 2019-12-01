import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from '../../utils/axios';

function SearchForm() {
  return (<Formik
    initialValues={{ query: ''}}
    onSubmit={(values, {setSubmitting}) => {
      axios.get('/')
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
