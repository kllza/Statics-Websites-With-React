const Proyects = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Proyectos
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Algunos de mis proyectos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Breve descripción de los proyectos y lo que se puede encontrar en
              ellos.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Proyecto 1 */}
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              {/* Imagen del proyecto */}
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                Proyecto 1
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-sm mt-3">
                  Descripción del proyecto 1.
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href="url-de-tu-proyecto-1"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                  >
                    {/* Icono de enlace */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 5.414V9a1 1 0 11-2 0V5.414l-.293.293zM16 14a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3-8a1 1 0 011 1v7H8V7a1 1 0 112 0v5h2V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Ver proyecto</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="url-codigo-proyecto-1"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                  >
                    {/* Icono de código */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 3.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414L12.414 9l2.707 2.707a1 1 0 01-1.414 1.414L11 10.414V16a1 1 0 11-2 0V10.414L6.707 12.707a1 1 0 01-1.414-1.414L7.586 9 4.879 6.293a1 1 0 010-1.414l3-3zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Código fuente</span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* Proyecto 2 */}
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              {/* Imagen del proyecto */}
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                Proyecto 2
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-sm mt-3">
                  Descripción del proyecto 2.
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href="url-de-tu-proyecto-2"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                  >
                    {/* Icono de enlace */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 5.414V9a1 1 0 11-2 0V5.414l-.293.293zM16 14a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3-8a1 1 0 011 1v7H8V7a1 1 0 112 0v5h2V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Ver proyecto</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="url-codigo-proyecto-2"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                  >
                    {/* Icono de código */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 3.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414L12.414 9l2.707 2.707a1 1 0 01-1.414 1.414L11 10.414V16a1 1 0 11-2 0V10.414L6.707 12.707a1 1 0 01-1.414-1.414L7.586 9 4.879 6.293a1 1 0 010-1.414l3-3zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Código fuente</span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* Proyecto 3 */}
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              {/* Imagen del proyecto */}
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                Proyecto 3
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-sm mt-3">
                  Descripción del proyecto 3.
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href="url-de-tu-proyecto-3"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                  >
                    {/* Icono de enlace */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9 5.414V9a1 1 0 11-2 0V5.414l-.293.293zM16 14a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3-8a1 1 0 011 1v7H8V7a1 1 0 112 0v5h2V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Ver proyecto</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="url-codigo-proyecto-3"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                  >
                    {/* Icono de código */}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 3.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414L12.414 9l2.707 2.707a1 1 0 01-1.414 1.414L11 10.414V16a1 1 0 11-2 0V10.414L6.707 12.707a1 1 0 01-1.414-1.414L7.586 9 4.879 6.293a1 1 0 010-1.414l3-3zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">Código fuente</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Proyects;
