import React, { useState } from 'react'


function FilhoIndireta(props) {

    function gerarSalada() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    }

    return ( 
    <>
        <button onClick={function () {
            const n = gerarSalada()
            props.funcao(n, 'Salada gerada: ')
        }}>
            Gerar salada
        </button>
        
    </>
    )
}

export default FilhoIndireta

//Filho executa e Pai faz a leitura e renderiza.