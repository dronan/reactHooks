import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../data/hooks/useCounter'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch } from '../../data/hooks/useFetch'
import './UseCustom.css'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()

    const response = useFetch('http://files.cod3r.com.br/curso-react/estados.json')

    function statesBR() {
        return response.data.map(state => <li key={state.sigla}>{state.sigla} - {state.nome} </li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc() }>+1</button>
                    <button className="btn" onClick={() => dec() }>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center States">
                <ul>
                    {!response.loading ? statesBR(response) : false}
                </ul>
            </div>

        
        </div>
    )
}

export default UseRef
