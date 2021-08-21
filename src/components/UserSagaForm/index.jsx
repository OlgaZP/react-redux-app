import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'

function UserSagaForm (props) {
  const {} = props

  const initialUserValues = {
    name: '',
    telNumber: '',
    isBanned: false
  }
  const submitHandler = (values, formikBag) => {
    //
    formikBag.resetForm()
  }

  return (
    <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='name' />
            <Field name='telNumber' />
            <button type='submit'>Add</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default UserSagaForm
