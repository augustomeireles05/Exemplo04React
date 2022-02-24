import React, { useState } from 'react'
import './direta.css'

function FilhoDireta(props) {

    let style = 'alface '
    if (props.alface) {
        style = style + 'alface'
    }

    return ( 
    <>
        <h2 className="beterraba">{props.a}</h2>
        <h2 className={style}>{props.b}</h2>
        
    </>
    )
}

export default FilhoDireta