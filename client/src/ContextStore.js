import React, { useState, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie'
// import Cookies from '/path/to/js.cookie.mjs';
export const Context = React.createContext();

export const ContextStore = ({ children }) => {
    let initialValue = null;
    const [cookies, setCookie, removeCookie] = useCookies('USER_SESSION');
    const [userData, setUserData] = useState(initialValue)
    
    useEffect(() => {
        console.log(cookies.USER_SESSION)
        if (!cookies.USER_SESSION) {
            ( async () => {
                await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/getUser`, { credentials: 'include' })
                .then(res => res.json())
                .then(res => {
                    return setUserData(res.user)
                })
            })() 
        }
    }, [cookies])

    const providerValue = useMemo(() => ({ userData, setUserData }), [userData, setUserData])

    return (
        <Context.Provider value={providerValue}>
            {children}
        </Context.Provider>
    )
}