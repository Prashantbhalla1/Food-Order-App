import "./cartopenmeals.css";
import { CartContext } from "../store/Cartcontext";
import { useContext } from "react";
const Cartopenmeals = (props) => {
  const ctx = useContext(CartContext);
  const removehandle = () => {
    ctx.removeitem(props.name);
  };
  const clickhandle = () => {
    const val = 1;

    const item = {
      name: props.name,
      amount: val,
      price: props.price,
    };
    ctx.additem(item);
  };

  return (
    <div className="itemm">
      <div>
        <h3>{props.name}</h3>

        <div className="box">
          {" "}
          <p className="ammmm">₹ {props.price}</p>
          <div className="increased">x{props.amount}</div>
        </div>
      </div>
      <div className="usercart">
        <button className="inc" onClick={clickhandle}>
          +
        </button>
        <button className="inc" onClick={removehandle}>
          -
        </button>
      </div>
    </div>
  );
};
export default Cartopenmeals;
