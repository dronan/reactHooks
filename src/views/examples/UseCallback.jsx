import { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)
    
    /* 
    useCallback recebe uma função e um array de dependencias
        
    a função é executada apenas quando as dependencias mudam
    
    o useCallback é usado para evitar que uma função seja recriada 
    toda vez que o componente for renderizado

    no exemplo abaixo, passa o setCount como dependencia, pois ele é chamado dentro da função inc,
    e toda vez que o componente for renderizado, a função inc é recriada, e o setCount é recriado
    com o valor atualizado, e isso faz com que o UseCallbackButtons seja renderizado novamente

    */

    const inc = useCallback(function inc(delta) {
        setCount(current => current + delta)
    },[setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>


        </div>
    )
}

export default UseCallback
