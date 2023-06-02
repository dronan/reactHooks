import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

/* 
    * usado para compartilhar dados entre componentes sem a necessidade de passar props.
    *
    * em uma situação em que dois componentes distantes em um grafo precisam trocar informações entre si, 
    * o contexto pode ser usado.
    * 
    * é criado no arquivo DataContext.jsx, e passado para os componentes que vão usar o contexto através do componente 
    * Provider. Este componente é passado no arquivo App.jsx
    * 
    * o useContext é usado para acessar o contexto
    * 
    * os valores no contexto são acessados através do atributo state, e não são perdidos na navegação entre páginas
*/

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext)

    function addNumber(n) {
        setState({
            ...state,
            number: n
        })
    }

    const { number, text, setNumber, setText } = useContext(AppContext)

    useEffect(function() {
        if(number > 1250) {
            setText('Eita!!!')
        }
    },[number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{state.number}</span>
                <span className="text">{state.text}</span>

                <div>
                    <button className="btn" onClick={() => addNumber(state.number - 1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(state.number + 1)}>+1</button>
                </div>

            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={ _ => setNumber( number - 1)}>-1</button>
                    <button className="btn" onClick={ _ => setNumber( number + 1)}>+1</button>
                </div>
            </div>

        </div>
    )
}

export default UseContext
