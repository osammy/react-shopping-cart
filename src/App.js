import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <ProductContext.Consumer>
        {props => {
          return (
            <div className="App">
              <CartContext.Provider value={{ cart }}>
                <CartContext.Consumer>
					
                  {
					  cartProps => {
                    return (
                      <div>
                        <Navigation cart={cartProps.cart} />
                        <Route
                          path="/cart"
                          Component={ShoppingCart}
                        />
                      </div>
                    );
                  }}
                </CartContext.Consumer>
              </CartContext.Provider>
              <Route
                exact
                path="/"
                Component={Products}
              />
            </div>
          );
        }}
      </ProductContext.Consumer>
    </ProductContext.Provider>
  );
}

export default App;
