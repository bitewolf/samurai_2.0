import { useFormik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'

const LoginForm = (props) => {

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false
    }

    const onSubmit = values => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })
            return (
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
                )
        }

const Login = (props) => {
    
    const onSub = (formikData) => {
        props.login (formikData.email, formikData.password, formikData.rememberMe)
    }
    return  <div>
                <h1>LOGIN</h1>
                <LoginForm onSub={onSub}/>
            </div>
        }

export default connect(null, {login})(Login)