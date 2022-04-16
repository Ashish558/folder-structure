import React from 'react'
import { useSelector } from 'react-redux'

import ActivityCategory from './activityCategory'

//will fetch activityCategories from backend and map them to display each activity type
export default function ActivityCategories() {

    const { categories } = useSelector(state => state.activityCategories)

    return (
        <>
            <h2>Categories </h2>
            <div>
                {categories.map(category => {
                    return <ActivityCategory key={category.id} {...category} />
                })}
            </div>
        </>
    )
}
