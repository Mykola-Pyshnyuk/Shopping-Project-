import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

const Context = createContext({});

function ContextProvider({ children }) {
  const [isCartListStyle, setCartListStyle] = useState(true);

  function changeStyle() {
    setCartListStyle(!isCartListStyle);
  }

  return (
    <>
      <Context.Provider value={{ isCartListStyle, changeStyle }}>
        {children}
      </Context.Provider>{" "}
    </>
  );
}

export { Context, ContextProvider };

//? це писатив компонентах де потрібно шось робити
//*  import React ,{ useContext } from "react";
//* import { Context } from "./context";
//* const text = useContext(Context);
//* console.log(text);
