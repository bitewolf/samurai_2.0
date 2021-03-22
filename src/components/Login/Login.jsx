import { useFormik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import style from './Login.module.css'

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
                <h1>LOGIN</h1>
                <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input value={formik.values.email} onChange={formik.handleChange} type = 'email' name='email' placeholder='Email'/><label>login</label>
                            {props.errorCod !== 0 ? <div className={style.error}>{props.errorName}</div> : null}
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
    isAuth: state.auth.isAuth,
    errorCod: state.auth.errorCod,
    errorName: state.auth.errorName
})
export default connect(mapStateToProps, {login})(Login)