export function login(dispatch, name, email){
    dispatch({type: 'login', 
    payload: {
        name, 
        email
    }
})
}