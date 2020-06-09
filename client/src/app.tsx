import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [id, setId] = useState('');
  const onSubmit = async (values: any) => {
    const response = await (
      await fetch('/api/v1/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
    ).json();
    setId(response._id);
  };
  return (
    <Formik initialValues={{ firstName: '', lastName: '' }} onSubmit={onSubmit}>
      <Form>
        <h1>My Little App</h1>
        <h2>Registration</h2>
        <p>
          <label htmlFor="firstName">First name</label>
          <br />
          <Field placeholder="First name" name="firstName" />
        </p>
        <p>
          <label htmlFor="lastName">Last name</label>
          <br />
          <Field placeholder="Last name" name="lastName" />
        </p>
        <p>
          <button type="submit">Register</button>
        </p>
        {id && <p id="id">ID: {id}</p>}
      </Form>
    </Formik>
  );
};

export default App;
