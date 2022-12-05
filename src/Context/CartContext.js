import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [totolCart, setTotalCart] = useState([]);
  return (
    <CartContext.Provider
      value={{
        totolCart,
        setTotalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
