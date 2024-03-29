import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0) // => [variavel, funcao], array destructuring array[0] e array[1]
    const [name, setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{count}</span>
                    <div>
                        <button className="btn" onClick={ _ => setCount(count - 1)}>-</button>
                        <button className="btn" onClick={ _ => setCount(count + 1)}>+</button>
                        <button className="btn" onClick={ _ => setCount(current => current + 1000)}>+1000</button>
                    </div>
                </div>

            <SectionTitle title="Exercício #02" />
                <div className="center">
                    <div>
                        <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <span className="text">{name}</span>
                </div>

        </div>
    )
}

export default UseState
