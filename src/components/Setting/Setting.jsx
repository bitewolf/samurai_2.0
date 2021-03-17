import { Field, Form, Formik } from "formik";



const Setting = (props) => {

    const submit = (values, {setSubmitting}) => {
        setSubmitting(false)
    }

    return (
            <div>
                Setting
                <Formik
                    initialValues={{ term: '' }}
                    onSubmit={submit}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                        <Field type="text" name="term" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </Form>
                    )}
                </Formik>
            </div>
    )
}

export default Setting