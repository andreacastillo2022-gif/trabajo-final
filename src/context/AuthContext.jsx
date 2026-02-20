import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);


useEffect(() => {
 return onAuthStateChanged(auth, setUser);
}, []);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
    console.log("USUARIO ACTUAL:", usuarioFirebase);
    setUser(usuarioFirebase);
  });

  return () => unsubscribe();
}, []);

return (
  <AuthContext.Provider value={{ user, logout: () => signOut(auth) }}>
    {children}
  </AuthContext.Provider>
); 
}

export const useAuth = () => useContext(AuthContext);
