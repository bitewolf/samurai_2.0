import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import { useFormik } from 'formik'

const Dialogs = (props) => {
    let state = props.messagesPage
    let dialogsElements = state.dialogsData.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messagesData.map ( s => <Message message={s.message} key={s.id}/>)
    let addMessage = () => {
        props.sendMessage()
    }

    const formik = useFormik({
        initialValues: {
            message: 'new message'
        },
        onSubmit: values => {

        }
    })

    const onChange = (e) => {
        formik.handleChange(e)
        props.updatenewMessageTextCreator(formik.values.message)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <form onSubmit={formik.handleSubmit}>
                    <input type = 'text' id='message' name='message' onChange={onChange} value={formik.values.message}/>
                    <button type = 'submit' onClick = {addMessage}>Add post</button>
                    <button type = 'button'>Remove</button>
            </form>
            </div>
            
        </div>
    )
}
export default Dialogs