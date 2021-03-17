import { useFormik } from "formik";


const Setting = () => {

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
      },
      onSubmit: values => {
        console.log(values)
      },
    })
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
  
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
  
        <button type="submit">Submit</button>
      </form>
    )
  }

// const Setting = (props) => {

//     const submit = (values, {setSubmitting}) => {
//         setSubmitting(false)
//     }

//     return (
//             <div>
//                 Setting
//                 <Formik
//                     initialValues={{ term: '' }}
//                     onSubmit={submit}
//                     >
//                     {({ isSubmitting }) => (
//                         <Form>
//                         <Field type="text" name="term" />
//                         <button type="submit" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//     )
// }



export default Setting