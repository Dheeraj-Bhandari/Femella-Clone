import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [totolCart, setTotalCart] = useState([]);
  const [totalAmount, setTotalAmout] = useState(0);

  return (
    <CartContext.Provider
      value={{
        totolCart,
        setTotalCart,
        totalAmount,
        setTotalAmout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
