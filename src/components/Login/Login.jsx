import { useFormik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import { CreateField } from '../Common/FormsControl'
import style from './Login.module.css'

const Login = ({login, isAuth, errorCod, errorName}) => {

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false
    }

    const onSubmit = values => {
        login (formik.values.email, formik.values.password, formik.values.rememberMe)
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    })

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    
    return  <div>
                <h1>LOGIN</h1>
                <form onSubmit={formik.handleSubmit}>
                        {CreateField("Email", "email", "email", formik.handleChange, formik.values.email, "login")}
                        {errorCod !== 0 ? <div className={style.error}>{errorName}</div> : null}
                        {CreateField("Password", "password", "password", formik.handleChange, formik.values.password, "password")}
                        {CreateField(null, "rememberMe", "checkbox", formik.handleChange, formik.values.rememberMe, "remember me")}
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