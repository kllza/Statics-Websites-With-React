const Navbar = () => {
  return (
    <header className="bg-gray-100 py-4">
      <nav className="flex justify-between items-center container">
        <div>
          <h1 className="font-bold text-lg">Nombre del Negocio</h1>
        </div>
        <ul className="flex">
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#inicio">
              Inicio
            </a>
          </li>
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#servicios">
              Servicios
            </a>
          </li>
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#acerca">
              Acerca de Nosotros
            </a>
          </li>
          <li className="ml-4">
            <a className="text-gray-600 hover:text-gray-800" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
