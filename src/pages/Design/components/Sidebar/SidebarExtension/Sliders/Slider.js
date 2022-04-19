import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActivity } from '../redux/slices/activity'

//clicking on any theme from trending themes will open the theme in the design box
export default function Slider({ img, name, subtype, activityType, positions }) {

    const dispatch = useDispatch()
    const { activities } = useSelector(state => state.activity)

    const handleClick = () => {
        dispatch(setActivity({
            activitySubtype: subtype,
            activityType,
            positions
        }))
    }

    return (
        <div onClick={handleClick} >
            <h4> {name} </h4>
            <img src={img} />
        </div>
    )
}
