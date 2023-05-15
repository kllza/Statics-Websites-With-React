import PropTypes from 'prop-types';
const Cart = ({ cartItems, onRemoveFromCart }) => {
  const handleRemoveClick = (itemId) => {
    onRemoveFromCart(itemId);
  };
  return (
    <section id="carrito" className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p>No hay items en el carrito.</p>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4">Producto</th>
                  <th className="py-2 px-4">Cantidad</th>
                  <th className="py-2 px-4">Precio</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border py-2 px-4">{item.name}</td>
                    <td className="border py-2 px-4">{item.quantity}</td>
                    <td className="border py-2 px-4">
                      ${item.price * item.quantity}
                    </td>
                    <td className="border py-2 px-4 text-right">
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleRemoveClick(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 text-right font-bold">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </div>
            <div className="mt-8 text-right">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
