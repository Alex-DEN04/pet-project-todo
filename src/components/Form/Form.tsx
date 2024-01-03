import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { object, string } from 'yup';

interface Values {
  email: string;
  password: string;
}

// type Action = () => void { };

const todoSchema = object({
  email: string().required(),
  password: string().required(),
  // password: string().url().nullable(),
  // age: number().required().positive().integer(),
  // email: string().email(),
  // createdOn: date().default(() => new Date()),
});

const initialValues = { email: '', password: '' }

const TodoForm = () => {

  const handleSubmit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
    console.log(values)
    resetForm()
  }
  return (
    <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={todoSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" />
            <ErrorMessage name="email" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  </div>
  )
  }
export default TodoForm;