import { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(number) {
    const n = parseInt(number)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [evenOdd, setEvenOdd] = useState("")

    // Fatorial
    // recebe uma funcao e um array de dependencias
    useEffect(() =>
        setFactorial(calcFactorial(number))
    , [number]) // le-se: toda vez que o number mudar, execute a funcao

    useEffect(() => {
        if(factorial > 1000000) {
            document.title = "Eita!!!"
        }
    }, [factorial])

    // Par ou impar
    useEffect(() => {
        setEvenOdd(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{factorial}</span>
                </div>
                <input type="number" min="0" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{evenOdd}</span>
                </div>
            </div>
        </div>
        
    )
}

export default UseEffect
