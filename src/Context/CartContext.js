import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [totolCart, setTotoalCart] = useState([]);
  return (
    <CartContext.Provider
      value={{
        totolCart,
        setTotoalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
