const Posts = () => {
  return (
    <div >
      <div className="flex flex-col">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://source.unsplash.com/random/800x600"
            alt="Random"
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                Título de la Publicación
              </p>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                nunc enim.
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Autor</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://source.unsplash.com/random/50x50"
                  alt="Random"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  Nombre del Autor
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2022-05-13">Mayo 13, 2022</time>
                <span aria-hidden="true">&middot;</span>
                <span>6 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
