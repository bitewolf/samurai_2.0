import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
 
const Message = (props) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
        
    )
}
 

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1,name: 'Dimych'},
        {id: 2,name: 'Andr'},
        {id: 3,name: 'Sveta'},
        {id: 4,name: 'Igor'},
        {id: 5,name: 'Tnya'},
        {id: 6,name: 'Petya'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ololo'},
        {id: 3, message: 'buy'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>

        </div>
    )
}



export default Dialogs