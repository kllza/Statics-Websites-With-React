import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ProductsCatalog from "./ProductsCatalog/ProductsCatalog";
import Cart from "./Components/Cart/Cart";
import PaymentePages from "./Components/PaymentPages/PaymentePages";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Producto 1",
      price: 10,
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 20,
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 15,
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Producto 4",
      price: 25,
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      name: "Producto 5",
      price: 30,
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  const handleAddToCart = (productId, name, price) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (existingCartItemIndex >= 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { id: productId, name, price: price, quantity: 1 },
      ]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };
  return (
    <>
      <Header />
      <Home />
      <ProductsCatalog products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <PaymentePages />
      <Footer />
    </>
  );
};

export default App;
