import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import appFirebase from "../firebase/config";

const auth = getAuth(appFirebase);

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
 return onAuthStateChanged(Aut, setUser);
}, []);

return (
  <AuthContext.Provider value={{ user, logout: () => signOut(auth) }}>
    {children}
  </AuthContext.Provider>
);
}

export const useAuth = () => useContext(AuthContext);
