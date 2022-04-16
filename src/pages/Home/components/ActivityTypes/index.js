import React from 'react'
import { useSelector } from 'react-redux'
import ActivityType from './activityType'

//will fetch activityTypes from backend and map them to display each activity type
//will only render activity types of selected activity category

export default function ActivityTypes() {

    const { activityTypes } = useSelector(state => state.activityTypes)
    const { categories } = useSelector(state => state.activityCategories)

    //activity category which is selected
    const selectedCategory = categories.find(category => category.isSelected === true)

    return (
        <>
            <h2>Activity type slider</h2>
            <div>
                {activityTypes.map(type => type.categoryId === selectedCategory.id ?
                    <ActivityType key={type.id} {...type} /> : null
                )}
            </div>
        </>
    )

}


