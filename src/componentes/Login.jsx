import { useState } from "react";
import '/src/App.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../firebase/config"
const auth = getAuth(appFirebase);

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  signInWithEmailAndPassword(auth, usuario, password)
    .catch(() => {
      setError("Usuario o contraseña incorrectos");
    });
};

  return (
    <div className="login">

        <table>
            <th>
                <img src="./src/assets/logo.jpeg" alt=""/>
            </th>

            <th>
                <h2 id="titulo">Iniciar sesión</h2>

                <form className="contenedor" onSubmit={handleSubmit}>

                    <input className="form" type="mail" placeholder="Correo Electronico" value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}/>
        

                    <input className="form" type="password" placeholder="Contraseña" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                    {error && <p>{error}</p>}

                    <button className="btn" type="submit">Entrar</button>
           
                </form>  
            </th> 
        </table>
    </div>
  );
}

export default Login;
