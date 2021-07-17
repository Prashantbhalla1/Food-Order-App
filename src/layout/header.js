import react, { useContext } from "react";
import "./header.css"
import Cart from "./Cart.js"



const Head=(props)=>{
  return (
    <>
      <header className="head">
        <h1>SRMS Canteen Meals</h1>

        <Cart onClik={props.onClick} />
      </header>

      <div className="imag">
        <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg"></img>
      </div>
    </>
  );
};

export default Head;
