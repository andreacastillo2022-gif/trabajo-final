import { useEffect, useState } from "react";
import './App.css'
import appFirebase from "./firebase/config"
import {getAuth, onAuthStateChanged} from './context/AuthContext';
const auth = getAuth(appFirebase)

import Login from '.src/componentes/Login'
import Home from '.src/componentes/Home'

function App() {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
                } 
            else {
                setUsuario(null);
            }
    });

    return () => unsubscribe();

    }, []);


    return (
        <div>
                {usuario ? <Home/> : <Login/>}
        </div>
    )
        
}

export default App