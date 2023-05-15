
const Header = () => {
  return (
    <header className="bg-gray-100 py-4">
      <nav className="flex justify-between items-center container">
        <div>
          <h1 className="font-bold text-lg">Mi Tienda en Línea</h1>
        </div>
        <ul className="flex">
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#inicio">
              Inicio
            </a>
          </li>
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#catalogo">
              Catálogo
            </a>
          </li>
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#carrito">
              Carrito
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
