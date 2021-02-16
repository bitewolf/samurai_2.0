import s from './../../../Navbar.module.css'
import React from 'react'

const Friend = (props) => {
    return (
      <div className={s.friend}>
        <img className={s.avatar} src={props.avatar} alt=""/>
        <div className={s.name}>{props.name}</div>
      </div>
    )

}

export default Friend