import React from 'react'

export default function Items({id , a , remove}) {
    return (
        <li>
            <span>{a}</span><span className='remove'  onClick = { () => {remove(id)} }  >-</span>
        </li>
    )
}
