import React from 'react'
import SidebarPanel from './components/Sidebar/SidebarPanel'
import SidebarExtension from './components/Sidebar/SidebarExtension'

//will render index.js in ./Sidebar and ./designActivity
export default function Design() {


    return (
      <div>
          <SidebarPanel />
          <SidebarExtension />
      </div>
    )
}
