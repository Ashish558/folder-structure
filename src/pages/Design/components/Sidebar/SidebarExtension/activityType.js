import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleActivityTypeSelection } from '../../../../../redux/slices/activityTypes'

// will display the name of a single activity type
//clicking on any type will SELECT theat activity type
// only the subtypes of the SELECTED activity type will be displayed in the below sliders

export default function ActivityType({ id, name, isSelected }) {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggleActivityTypeSelection({ id }))
    }

    return (
        <div onClick={handleClick} >
            <p> {name} </p>
        </div>
    )
}
