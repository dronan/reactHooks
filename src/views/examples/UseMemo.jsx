import {useEffect, useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(a, b) {
    const future = Date.now() + 2000
    while(Date.now() < future) {} // espera 2 segundos
    return a + b
}

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    /* 
    forma de usar a variavel result sem usar o useMemo
        // const result = sum(n1, n2)
    */


    /*  
        forma de usar a variavel result usando o useEffect para atualizar o valor
    
        // const [result, setResult] = useState(0)

        // useEffect(function() {
        //     setResult(sum(n1, n2))
        // }, [n1, n2])
    */

    /* 
    forma de usar a variavel result usando o useMemo:
    
    o useMemo recebe uma função e um array de dependencias
    a função é executada apenas quando as dependencias mudam
    se as dependencias nao mudarem, o useMemo retorna o valor anterior
    o useMemo é usado para evitar que uma função seja executada toda vez que o componente for renderizado
    */
    
    const result = useMemo(() => sum(n1, n2), [n1, n2])


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>


        </div>
    )
}

export default UseMemo
