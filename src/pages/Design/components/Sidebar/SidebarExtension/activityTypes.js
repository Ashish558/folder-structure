import React from 'react'
import { useSelector } from 'react-redux'
import ActivityType from './activityType'

//will render activi
export default function Activitytypes() {
    
    const { activityTypes } = useSelector(state => state.activityTypes)
    const { categories } = useSelector(state => state.activityCategories)

    const selectedTypes = activityTypes.filter(activityType => activityType.isSelected === true )
    
    //activity category which is selected
    const selectedCategory = categories.find(category => category.isSelected === true)

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
