import React from 'react'


export default function Slider({ img, name }) {

    return (
        <div>
            <h4> {name} </h4>
            <img src={img} />
        </div>
    )
}
