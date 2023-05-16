import PropTypes from "prop-types";

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id, product.name, product.price);
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={`Imagen del producto ${product.name}`}
      />
      <div className="py-4 px-6">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="mt-4">
          <span className="text-gray-600 font-bold">Precio:</span>
          <span className="ml-2">${product.price}</span>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  };

export default ProductCard;
