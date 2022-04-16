import React from 'react'
import { useSelector } from 'react-redux'
import ActivityCategory from './activityCategory'

//will render all the activity categories
export default function SidebarPanel() {

    const { categories } = useSelector(state => state.activityCategories)

    return (
        <div className='sidebar_panel' >
            <div className='activity_categories'>
                {categories.map(category => {
                    return <ActivityCategory key={category.id} {...category} />
                })}
            </div>
        </div>
    )
}
