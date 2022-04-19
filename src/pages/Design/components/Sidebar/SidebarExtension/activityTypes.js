import React from 'react'
import { useSelector } from 'react-redux'
import ActivityType from './activityType'

//will render activity types of selected activity category.
export default function Activitytypes() {
    
    const { activityTypes } = useSelector(state => state.activityTypes)
    const { categories } = useSelector(state => state.activityCategories)

    //activity category which is selected
    const selectedCategory = categories.find(category => category.isSelected === true)

    //activity types of only selected category and selected types
    const selectedTypes = activityTypes.filter(activityType => activityType.isSelected === true && activityType.categoryId === selectedCategory.id  )
    
    return (
        <>
            <div>
                {activityTypes.map(activityType => activityType.categoryId === selectedCategory.id ?
                    <ActivityType key={activityType.id} {...activityType} /> : null
                )}
            </div> 
        </>
    )
}
