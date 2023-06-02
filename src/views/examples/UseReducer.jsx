import React, { useReducer, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

function reducer(state, action){
    switch(action.type){
        case 'sum2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.payload.name, email: action.payload.email}}
        case 'multi7':
            return {...state, number: state.number * 7}
        case 'div25':
            return {...state, number: state.number / 25}
        case 'parseint':
            return {...state, number: parseInt(state.number)}
        case 'somanumero':
            return {...state, number: state.number + action.payload}
        default:
            return state
    }
}

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
                    <button className="btn" onClick={() => dispatch({type: 'login', 
                                                                    payload: {
                                                                                name:'Maria', 
                                                                                email: 'maria@email.com'
                                                                            }
                                                                        })}>login</button>
                    <button className="btn" onClick={() => dispatch({type: 'sum2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'multi7'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'div25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'parseint'})}>parse int</button>
                    <button className="btn" onClick={() => dispatch({type: 'somanumero', payload: parseInt(refNumber.current.value)})}>Add um numero qualquer</button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
