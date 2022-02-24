import React, { useState } from 'react'
import FilhoIndireta from './FilhoIndireta'


function PaiIndireta(props) {

    const [mistura, setMistura] = useState('')
    const[marmita, setPrato] = useState('')

    function showValue(rice, mistura) {
        setPrato(rice, mistura)
        setMistura(mistura)
    }


    return ( 
    <>
        
        <h2>
            {mistura} {marmita}
        </h2>
        <FilhoIndireta funcao={showValue} />

    </>
    )
}

export default PaiIndireta

//Filho executa e Pai faz a leitura e renderiza