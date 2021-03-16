import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import { Field, useFormik, FormikProvider } from 'formik'

const Dialogs = (props) => {
    
    let state = props.messagesPage
    
    let dialogsElements = state.dialogsData.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messagesData.map ( s => <Message message={s.message} key={s.id}/>)
    // let newMessageElement = React.createRef()

    let addMessage = () => {
        props.sendMessage()
    }
    // let onNewMessageChange = () => {
    //     let newMessageText = newMessageElement.current.value
    //     props.updatenewMessageTextCreator(newMessageText)
    // }

    const formik = useFormik({
        initialValues: {
            message: 'new message'
         },
        onSubmit: values => {
            let newMessageText = values.message
            props.updatenewMessageTextCreator(newMessageText)
        }
    })
    
    
   
 

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
             </div>
            <div className={s.messages}>
                {messagesElements}
                
                {/* <textarea ref={newMessageElement} onChange = {onNewMessageChange} value = {props.messagesPage.newMessageText}></textarea>
                <div className={s.buttons}>
                    <button onClick = {addMessage}>Add post</button>
                    <button>remove</button>
                </div>        */}
                
                Formik
                <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='name'>Message</label>
                    <Field type = 'text' id='message' name='message' onChange={formik.handleChange} value={formik.values.message}/>
                    <button type = 'submit' onClick = {addMessage}>Add post</button>
                    <button type = 'button'>Remove</button>
                </form>
                </FormikProvider>
                       
            </div>
        </div>
    )
}
export default Dialogs