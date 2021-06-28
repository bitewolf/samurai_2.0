import React from 'react'
import styles from './paginator.module.css'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return <div className={styles.paginator}>
            {currentPage > 5 && <button className={styles.paginatorButtons} onClick={(e)=>{onPageChanged(1)}}>&lt;&lt;</button>}
            {currentPage > 5 && <button className={styles.paginatorButtons} onClick={(e)=>{onPageChanged(currentPage-5)}}>&lt;</button>}

            {pages.map(p => {
            if (p === currentPage || (p < currentPage + 5 &&  p > currentPage - 5)) {
                return <span className={currentPage === p && styles.selectedPage} onClick={(e) => { onPageChanged(p) }}>{p} </span>
            }
            
        })}
            
            {currentPage < pagesCount-5 && <button className={styles.paginatorButtons} onClick={(e)=>{onPageChanged(currentPage+5)}}>&gt;</button>}
            {currentPage < pagesCount-5 && <button className={styles.paginatorButtons} onClick={(e)=>{onPageChanged(pagesCount)}}>&gt;&gt;</button>}
            </div>
}
export default Paginator