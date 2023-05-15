
const Habilities = () => {
  return (
    <section className="bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Habilidades</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Mis habilidades
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Enumera tus habilidades con un resumen breve.
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Habilidad 1 */}
          <div className="pt-6">
            <div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
              <div className="-mt-6">
    <div>
    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
      {/* Icono de habilidad */}
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  </div>
  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Habilidad 1</h3>
  <p className="mt-5 text-base text-gray-500">
    Descripción de la habilidad 1.
  </p>
</div>
</div>
</div>

{/* Habilidad 2 */}
<div className="pt-6">
<div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
<div className="-mt-6">
  <div>
    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
      {/* Icono de habilidad */}
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  </div>
  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Habilidad 2</h3>
  <p className="mt-5 text-base text-gray-500">
    Descripción de la habilidad 2.
  </p>
</div>
</div>
</div>

{/* Habilidad 3 */}
<div className="pt-6">
<div className="flow-root bg-gray-200 rounded-lg px-6 pb-8">
<div className="-mt-6">
  <div>
    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
      {/* Icono de habilidad */}
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  </div>
  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Habilidad 3</h3>
  <p className="mt-5 text-base text-gray-500">
    Descripción de la habilidad 3.
  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Habilities