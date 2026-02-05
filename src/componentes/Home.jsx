
import productos from "./productos";

function Home() {
  return (
    <div className="home-container">
      
      <nav className="nav">
        <h2 className="logo">Mi Tienda</h2>
        <button className="logout">Salir</button>
      </nav>

      <main className="main">
            <h1>Productos</h1>

            <div className="productos">
            {productos.map((prod) => (
                <div key={prod.id} className="producto">
                    <img src={prod.img} alt={prod.nombre} />
                    <h3>{prod.nombre}</h3>
                    <p>${prod.preciosinensamblar}</p>
                    <p>${prod.precioensamblado}</p>
                </div>
                ))}
            
            </div>
      </main>

    </div>
  );
}

export default Home;


  