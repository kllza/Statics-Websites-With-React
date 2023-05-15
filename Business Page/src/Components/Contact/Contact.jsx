const Contact = () => {
  return (
    <section id="contacto" className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">
                Nombre Completo
              </label>
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
              <label className="block text-gray-600 mb-2">Mensaje</label>
              <textarea
                className="w-full py-2 px-3 border border-gray-400 rounded h-40"
                defaultValue={""}
              />
            </div>
            <div className="text-right">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Enviar mensaje
              </button>
            </div>
          </form>
          <div>
            <h3 className="text-xl font-bold mb-2">Información de Contacto</h3>
            <p>
              Dirección: <br />
              Calle 123, Número 456, Colonia ABC <br />
              Ciudad, Estado, Código Postal
            </p>
            <p className="mt-4">
              Teléfono:{" "}
              <a className="text-blue-500" href="tel:+123456789">
                +1 (234) 567-89
              </a>
            </p>
            <p>
              Correo electrónico:{" "}
              <a className="text-blue-500" href="mailto:contacto@negocio.com">
                contacto@negocio.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
