const Home = () => {
  return (
    <section id="inicio" className="py-12 text-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">
          Bienvenido a Mi Tienda en Línea
        </h2>
        <p className="text-gray-600 mb-8">
          Aquí podrás encontrar los mejores productos al mejor precio. ¡Haz tu
          compra ahora!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Explorar Catálogo
        </button>
      </div>
    </section>
  );
};

export default Home;
