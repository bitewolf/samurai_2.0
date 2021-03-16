import React from 'react'
import { Form, Field } from 'react-final-form'

// const LoginForm = (props) => {
//     return  <Form onSubmit={onSubmit}>
//             {() => (<form onSubmit={props.handleSubmit}>
//                     <div>
//                         <Field name={'login'} placeholder={'Login'} component={'input'}/><label>login</label>
//                     </div>
//                     <div>
//                         <Field name={'password'} placeholder={'Password'} component={'input'}/><label>password</label>
//                     </div>
//                     <div>
//                         <Field name={'rememberMe'} type={"checkbox"} component={'input'}/>remember me
//                     </div>
//                     <div>
//                         <button>Login</button>
//                     </div>
//             </form>)}
//             </Form>
//         }

const Login = (props) => {
    const onSubmit = (e) => {
        console.log(e)
    }
    return  <div>
                <h1>LOGIN</h1>
                <Form onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                    <form onSubmit={props.handleSubmit}>
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
            </div>
        }

export default Login