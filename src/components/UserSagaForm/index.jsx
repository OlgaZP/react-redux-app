import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createUserAction } from './../../actions';

function UserSagaForm (props) {
  const { createUser } = props;

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
            <button type='submit'>Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createUser: user => {
    dispatch(createUserAction(user));
  },
});

export default connect(null, mapDispatchToProps)(UserSagaForm);
