import React, { useReducer, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { sum2, multi7, div25, parseint, somanumero, login } from '../../store/actions'

const UseReducer = (props) => {

    // o useReducer é usado para gerenciar estados de componentes funcionais
    // recebe dois parâmetros: o reducer que é a função que vai trabalhar o dado, e o estado inicial do dado
    // o dispatch é usado para disparar uma ação para o reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    const [number] = React.useState(0)

    const refNumber = useRef(null)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                state.user ?  
                    <span className="text">{state.user.name} - {state.user.email}</span> 
                :
                    <span className="text">sem usuário</span>
                }
                
                <span className="text">
                    {state.number}
                </span>     
                <span className="text">
                    <input type="number" className="input" ref={refNumber} defaultValue={number} />
                </span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'João', 'joao@gmail.com')}>login</button>
                    <button className="btn" onClick={() => sum2(dispatch) }>+2</button>
                    <button className="btn" onClick={() => multi7(dispatch) }>*7</button>
                    <button className="btn" onClick={() => div25(dispatch) }>/25</button>
                    <button className="btn" onClick={() => parseint(dispatch) }>parse int</button>
                    <button className="btn" onClick={() => somanumero(dispatch, +refNumber.current.value) }>Add um numero qualquer</button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
