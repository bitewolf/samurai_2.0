import s from './../Navbar.module.css'
import React from 'react'
import Friends from './Friends/Friends'

const Sidebar = (props) => {
  
    return (
        <div className={s.sidebar}>
          <div className={s.tag}>Friends</div>
          <div className={s.friends}>
              <Friends props={props.friends}/>
          </div>
        </div>
    )

}

export default Sidebar