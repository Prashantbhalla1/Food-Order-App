import Head from "./layout/header.js";
import Meals from "./meals/Meals.js";
import CartOpen from "./Card/CartOpen";
import React, { useState } from "react";
import Cartcontext from "./store/Cartcontext.jsx";

const App = () => {
  const [isopen, so] = useState(0);

  function setTrue() {
    so(1);
    console.log("1");
    document.querySelector("main").style.opacity = "0.2";
    document.querySelector(".imag").style.opacity = "0.2";
    document.querySelector("header").style.opacity = "0.2";
  }
  function setFalse() {
    so(0);
    document.querySelector("#root").style.opacity = "1";
    document.querySelector("main").style.opacity = "1";
    document.querySelector(".imag").style.opacity = "1";
    document.querySelector("header").style.opacity = "1";
  }

  return (
    <Cartcontext>
      {isopen ? <CartOpen onClick={setFalse} /> : null}
      <Head onClick={setTrue} />

      <main>
        <Meals />
      </main>
    </Cartcontext>
  );
};

export default App;
