import { createContext, useState } from "react";

const AuthContext = createContext({
    userID: null,
    logado: false,
    login: (event) => {},
    logout: (event) => {},
});

export function AuthContextpProvider(props){
    const [currentUser, setCurrentUser] = useState({
        userID: null, logado : false
    });

    function handleLogin(event){
        setCurrentUser({
            userID: 100, logado: true
        });
    }
}