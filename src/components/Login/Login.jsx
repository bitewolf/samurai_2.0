import React from 'react'
import { Form, Field } from 'react-final-form'

const LoginForm = (props) => {
    const onSubmit = (e) => {
        console.log(e)
    }
            return  <Form onSubmit={onSubmit}
            render={({ handleSubmit })=> (
                <form onSubmit={handleSubmit}>
                        <div>
                            <Field name={'login'} placeholder={'Login'} component={'input'}/><label>login</label>
                        </div>
                        <div>
                            <Field name={'password'} placeholder={'Password'} component={'input'}/><label>password</label>
                        </div>
                        <div>
                            <Field name={'rememberMe'} type={"checkbox"} component={'input'}/>remember me
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                </form>)}
            />
        }

const Login = (props) => {
    
    return  <div>
                <h1>LOGIN</h1>
                <LoginForm />
            </div>
        }

export default Login