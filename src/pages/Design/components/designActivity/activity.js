import React from 'react'
import { useSelector } from 'react-redux'
import FillInTheBlanks from './ActivityTypes/FillInTheBlanks'
import Mcq from './ActivityTypes/Mcq'

//will display the activity the user is creating 
export default function Activity() {

    const { activities } = useSelector(state => state.activity)
    const { selectedActivity } = useSelector(state => state.activity)

    return (
        <div>
            {
                activities[selectedActivity].activityType === 1001 ?
                <Mcq {...activities[selectedActivity]} /> : <FillInTheBlanks />
            }
        </div>
    )
}