import React, {useState} from 'react'
import styles from './paginator.module.css'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1
    let rightPortionPageNumber = portionNumber*portionSize
    debugger




    return <div className={styles.paginator}>
                {<button>&lt;&lt;</button>}
                {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>&lt;</button>}

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                   return <span key={p} className={currentPage === p && styles.selectedPage} onClick={(e) => {onPageChanged(p)}}>{p}</span>
                })}
                
                {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>&gt;</button>}
                {<button>&gt;&gt;</button>}
            </div>
}
export default Paginator