import React, {useState} from 'react';

function useLocalStorage(key,initialValue) {

    const [stateData, setStateData] = useState(()=>{
        const localStore =  JSON.parse(window.localStorage.getItem(key));
        if(localStore) return localStore;
        return initialValue
    })

    function setToLocalStorage(value) {
        window.localStorage.setItem(key,JSON.stringify(value));
        setStateData(value)
    }

    return [stateData, setToLocalStorage];

}

export default useLocalStorage;