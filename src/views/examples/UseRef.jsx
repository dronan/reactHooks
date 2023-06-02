import { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'



/** 
 * O useref é usado para guardar uma referencia de um elemento, 
 * como se fosse um ponteiro para um elemento.
 * 
 * Ele é usado para acessar elementos do DOM, como um input por exemplo.
 * 
 * Não refaz a renderização de componentes, como o useState faz, mas ele pode ser usado 
 * para guardar um valor, que nao vai ser renderizado na tela
**/

const merge = function(s1, s2) {
    // o spread operator (...) transforma uma string em um array de caracteres, ele tambem é usado para conctatenar arrays  
    // o map percorre o array e retorna um novo array com os caracteres concatenados
    // o join junta todos os caracteres em uma string novamente
    return [...s1].map(function(e, i) {
        return `${e}${s2[i] || ""}` // se o s2[i] for undefined, retorna uma string vazia, para nao dar erro e retornar undefined
    }).join("")
}

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(() => {
        count.current++
        myInput1.current.focus()
    }, [value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1} value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
            

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>


    )
}

export default UseRef
