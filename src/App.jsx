import { useAuth } from "./context/AuthContext";
import Login from "./componentes/Login";
import Home from "./componentes/Home";


function App() {

    const { user }= useAuth();

    return (
        <div>
                {usuario ? <Home/> : <Login/>}
        </div>
    )
        
}

export default App