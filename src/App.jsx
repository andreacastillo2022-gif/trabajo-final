import { useAuth } from "./context/AuthContext";
import Login from "./componentes/Login";
import Home from "./componentes/Home";


function App() {

    const { user }= useAuth();


  console.log("USER EN APP:", user);

    return (
        <div>
                {user ? <Home/> : <Login/>}
        </div>
    )
        
}

export default App