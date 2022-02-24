import React, { useState } from 'react'
import Filho from './FilhoDireta'

function PaiDireta(props) {

    let abob = 'ABOBRINHAAAA'
    let chuc = 'CHUCHUUUUU'

    return ( 
    <>
        
        <Filho a={abob} b={chuc} />
        
    </>
    )
}

export default PaiDireta