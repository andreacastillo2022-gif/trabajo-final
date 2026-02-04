import { useState } from "react";
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
    <div>
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input type="mail" placeholder="correo electronico" value={usuario}
          onChange={(e) => setUsuario(e.target.value)}/>
        

        <input type="password" placeholder="Contraseña" value={password}
          onChange={(e) => setPassword(e.target.value)}/>

        {error && <p>{error}</p>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
