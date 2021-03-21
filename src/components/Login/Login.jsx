import { Formik, useFormik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'


// const BasicExample = () => (
//     <div>
//       <h1>My Form</h1>
//       <Formik
//         initialValues={{ name: 'jared' }}
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2))
//             actions.setSubmitting(false)
//             actions.setStatus()
//             debugger
//           }, 100);
//         }}
//       >
//         {props => (
//           <form onSubmit={props.handleSubmit}>
//             <input
//               type="text"
//               onChange={props.handleChange}
//               value={props.values.name}
//               name="name"
//             />
//             {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   )

const Login = (props) => {

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false
    }

    const onSubmit = values => {
        props.login (formik.values.email, formik.values.password, formik.values.rememberMe)
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    
    return  <div>
                {/* <BasicExample/> */}
                <h1>LOGIN</h1>
                <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input value={formik.values.email} onChange={formik.handleChange} type = 'email' name='email' placeholder='Email'/><label>login</label>
                        </div>
                        <div>
                            <input value={formik.values.password} onChange={formik.handleChange} type = 'password' name='password' placeholder='Password'/><label>password</label>
                        </div>
                        <div>
                            <input value={formik.values.rememberMe} onChange={formik.handleChange} name='rememberMe' type="checkbox"/>remember me
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                </form>
            </div>
        }
        
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)