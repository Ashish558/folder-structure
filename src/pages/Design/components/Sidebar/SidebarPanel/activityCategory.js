import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCategory } from '../../../../../redux/slices/activityCategories'

// will display elements of a single activity category ie. category name and icon
//clicking on any category will select that category
export default function ActivityCategory({ id, icon, categoryName, isSelected }) {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(selectCategory({ id }))
    }

    return (
        <div onClick={handleClick} >
            <img src={icon} alt='category-icon' />
            <p> {categoryName} </p>
        </div>
    )
}
