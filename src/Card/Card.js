import { useContext } from "react";
import { CartContext } from "../store/Cartcontext";
import "./Card.css"
const Card = (props) => {
  const ctx=useContext(CartContext)

  const clickhandle=()=>{


const val=document.querySelector("#"+props.name).value - '0';


if(val<1){
  alert("Please Enter The Valid Amount");
}

else{const item={
  name:props.name,
  amount:val,
  price:props.price
  
    }
    ctx.additem(item);

}

  }
  const hell=props.name.trim();

  return (
    <div className="item">
      <img className="logo" src={props.src} />
     <div>
        <h3>{props.name}</h3>
      <p>{props.dis}</p>
      <h4>₹ {props.price}</h4>
      
      </div>
     <div className="userinput">

       <input type="number"  min="0" id={`${hell}`} ></input>
       <br></br>
<button className={`btn`}  onClick={clickhandle}>+Add</button>


     </div>


    </div>
  );
};
export default Card;
