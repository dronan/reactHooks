import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'

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

    function setNumber(n) {
        setState({
            ...state,
            number: n
        })
    }

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
                    <button className="btn" onClick={() => setNumber(state.number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(state.number + 1)}>+1</button>
                </div>

            </div>
        </div>
    )
}

export default UseContext
