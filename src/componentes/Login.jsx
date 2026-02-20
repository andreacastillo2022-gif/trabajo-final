import { useState } from "react";
import '/src/App.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  signInWithEmailAndPassword(auth, user, password)
    .catch(() => {
      setError("Usuario o contraseña incorrectos");
    });
};

  return (
    <div className="login">

        <table>
          <tbody>
          <tr>
            <th>
                <img src="./src/assets/logo.jpeg" alt=""/>
            </th>

            <th>
                <h2 id="titulo">Iniciar sesión</h2>

                <form className="contenedor" onSubmit={handleSubmit}>

                    <input className="form" type="email" placeholder="Correo Electronico" value={user}
                    onChange={(e) => setUser(e.target.value)}/>
        

                    <input className="form" type="password" placeholder="Contraseña" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                    {error && <p>{error}</p>}

                    <button className="btn" type="submit">Entrar</button>
           
                </form>  
            </th> 
          </tr>
          </tbody>
        </table>
    </div>
  );
}

export default Login;
