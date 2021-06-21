import React from 'react'
import styles from './paginator.module.css'

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return <div className={styles.usersPages}>
                {pages.map(p => {
                   return <span key={p} className={props.currentPage === p && styles.selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
}
export default Paginator