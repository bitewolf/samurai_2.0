import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import validate from './../../utils/validators/validatorsJax'
import React from 'react'
import { useFormik } from 'formik'



const Dialogs = (props) => {
    
    let state = props.messagesPage
    let dialogsElements = state.dialogsData.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messagesData.map ( s => <Message message={s.message} key={s.id}/>)

    

    const initialValues = {
        message: 'new message'
    }

    const onSubmit = values => {
        props.sendMessage(values.message)
    }

    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate 
    })

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.formControl}>
                        <input type = 'text' id='message' name='message' onChange={formik.handleChange} value={formik.values.message}/>
                        {formik.errors.message ? <div className={s.errors}>{formik.errors.message}</div> : null}
                    </div>  
                        <button type = 'submit'>Add post</button>
                        <button type = 'button'>Remove</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs