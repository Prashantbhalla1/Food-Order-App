import './cartOpen.css'
import { CartContext } from '../store/Cartcontext';
import { useContext } from 'react';
import Cartopenmeals from './Cartopenmeals.js'
const CartOpen=props=>{
let namee=[];

let ctx=useContext(CartContext);
namee=ctx.items;
return (
 
    <div className="cartdisplay">

  <ul> {namee.map((e)=>{
       return (
<li className="lii"> <Cartopenmeals name={e.name} amount={e.amount} price={e.price} /> </li>
       )
   })}
   
   <hr></hr>
   </ul>

   <div className="totalamount">
<span className="amount">Total Amount</span>
<h5>₹ {ctx.totalamount}</h5>

   </div>
   <div className="cartbtn">
<button className="btnn btn" onClick={props.onClick}>Close</button>
<button className="btnn btn">Order</button>
   </div>




    </div>



)


}
export default CartOpen;