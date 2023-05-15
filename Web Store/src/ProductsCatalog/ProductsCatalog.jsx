import ProductCard from "../Components/ProductCard/ProductCard";

const ProductsCatalog = ({ products, onAddToCart }) => {
  return (
    <section id="catalogo" className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Catálogo de Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCatalog;
