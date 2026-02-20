import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import "./Home.css"

function Home() { 
  const[productos, setProductos]= useState([]);
  
  useEffect(() => {
  const obtenerProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const lista = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProductos(lista);
  };

  obtenerProductos();
}, []);

  return (
    <div className="home-contenedor">
      
      <nav className="nav">
        <img src="./src/assets/logo.jpeg" alt=""/>
        <button className="logout">Salir</button>
      </nav>

      <main className="main">
            <h1>Productos</h1>

            <div className="productos">
            {productos.map((prod) => (
                <div key={prod.id} className="producto">
                    <img src={prod.img} alt={prod.nombre} />
                    <h3>{prod.nombre}</h3>
                    <p className="ensamblado">Sin Ensamblar</p>
                    <p>${prod.preciosinensamblar}</p>
                    <p className="ensamblado">Ensamblado</p>
                    <p>${prod.precioensamblado}</p>
                     <button className="comprar">Comprar</button>
                </div>
                ))}
            
            </div>
      </main>

    </div>
  );
}

export default Home;


  