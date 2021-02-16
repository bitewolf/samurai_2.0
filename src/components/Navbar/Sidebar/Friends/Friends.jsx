import s from './../../Navbar.module.css'
import React from 'react'
import Friend from './Friend/Friend'

const Friends = (props) => {
  
    let friendsElements = props.props.friends.map ( f => {
            return <Friend avatar={f.avatar} name={f.name}/>
    })
    return (
      <div className={s.friends}>
        {friendsElements}
      </div>
      
          )

}

export default Friends