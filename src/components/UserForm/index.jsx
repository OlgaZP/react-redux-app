import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createUser } from './../../actions';

function UserForm (props) {
  const { createUserAction } = props;

  const initialUserValues = {
    name: '',
    phone: '',
    isBanned: false,
  };

  const submitHandler = (values, formikBag) => {
    createUser(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='name' />
            <Field name='phone' />
            <button type='submit'>Add to list</button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createUserAction: data => {
      dispatch(createUser(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
