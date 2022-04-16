import React from 'react'
import { useSelector } from 'react-redux'
import ActivityType from './activityType'

//will render activity types panel
export default function Activitytypes() {
    
    const { activityTypes } = useSelector(state => state.activityTypes)
    const { categories } = useSelector(state => state.activityCategories)

    //activity category which is selected
    const selectedCategory = categories.find(category => category.isSelected === true)

    return (
        <>
            <div>
                {activityTypes.map(type => type.categoryId === selectedCategory.id ?
                    <ActivityType key={type.id} {...type} /> : null
                )}
            </div> 
        </>
    )
}
