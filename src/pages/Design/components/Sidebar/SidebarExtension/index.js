import React from 'react'
import Activitytypes from './activityTypes'
import Searchbar from './searchbar'
import Sliders from './Sliders'

//will render searchbar, activity types slider and index.js in ./sliders.
export default function SidebarExtension() {

    return (
       <div>
           <Searchbar />
           <Activitytypes />
           <Sliders />
       </div>
    )
}
