import { useState, useEffect } from 'react';

export const useFetch = (url, method='GET', body=null, headers={}) => {
    const [response, setResponse] = useState({
        data: null,
        loading: true,
    })
    
    // se alterar algum parametro, executa a função
    useEffect(() => {
        fetch(url, { method, body, headers })
        .then(resp => resp.json())
        .then(json => {
            setResponse({
                data: json,
                loading: false,
            })
        })}, [url, method, body, headers])
        
        return response;
    }