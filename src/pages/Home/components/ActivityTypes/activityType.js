import React from 'react'

// will display elements of a single activity type
export default function ActivityType({ icon, name }) {

    return (
        <div>
            <p> {name} </p>
            <img src={icon} />
        </div>
    )
}
