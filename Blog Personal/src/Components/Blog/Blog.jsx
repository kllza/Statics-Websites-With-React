import Posts from "../Posts/Posts";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold mb-4">Últimas Publicaciones</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default Blog;
