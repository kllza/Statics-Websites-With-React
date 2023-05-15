
const PaymentePages = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Página de Pago</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Nombre Completo</label>
            <input
              className="w-full py-2 px-3 border border-gray-400 rounded"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Correo Electrónico
            </label>
            <input
              className="w-full py-2 px-3 border border-gray-400 rounded"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Dirección de Envío
            </label>
            <input
              className="w-full py-2 px-3 border border-gray-400 rounded"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Número de Tarjeta
            </label>
            <input
              className="w-full py-2 px-3 border border-gray-400 rounded"
              type="text"
            />
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-600 mb-2">
                Fecha de Vencimiento
              </label>
              <input
                className="w-full py-2 px-3 border border-gray-400 rounded"
                type="text"
                placeholder="MM/AA"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-600 mb-2">
                Código de Seguridad
              </label>
              <input
                className="w-full py-2 px-3 border border-gray-400 rounded"
                type="text"
              />
            </div>
          </div>
          <div className="text-right">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Pagar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentePages;
