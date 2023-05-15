import Header from "../../Molecules/Header/Header";

const Tickets = () => {
  return (
    <div>
      {/* <Header
        title="Compra tus boletos"
        buttonText="Más información"
        buttonOnClick={() => console.log("Botón de Más Información presionado")}
      /> */}
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-400">
        <h1 className="text-4xl font-bold mb-6">Boletos</h1>
        <p className="text-lg">Compra tus boletos para nuestro evento aquí.</p>
      </div>
    </div>
  );
};

export default Tickets;
