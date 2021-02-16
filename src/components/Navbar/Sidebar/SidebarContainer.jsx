import React from 'react'
import StoreContext from '../../../StoreContext'
import Sidebar from './Sidebar'

const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
        {store => {

          let state = store.getState()
          debugger
          return <Sidebar sidebar={state.sidebar}/>
        
        }}

    </StoreContext.Consumer>
  )
    

}

export default SidebarContainer