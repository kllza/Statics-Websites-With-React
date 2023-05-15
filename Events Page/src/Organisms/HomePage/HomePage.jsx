const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
        <h1 className="text-4xl font-bold mb-6">
          ¡Bienvenido a nuestro evento!
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ¡Más información aquí!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
