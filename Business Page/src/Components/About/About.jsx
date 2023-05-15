const About = () => {
  return (
    <section id="acerca" className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Acerca de Nosotros</h2>
            <p>
              Somos una empresa dedicada a ofrecer servicios de alta calidad en
              el mercado. Contamos con un equipo de profesionales altamente
              capacitados para satisfacer las necesidades de nuestros clientes
              en todo momento.
            </p>
            <p className="mt-4">
              Nuestra prioridad es garantizar la satisfacción de nuestros
              clientes y ofrecerles un servicio excepcional que supere sus
              expectativas.
            </p>
          </div>
          <div className="md:w-2/5">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://via.placeholder.com/400x300"
              alt="Imagen de la empresa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
