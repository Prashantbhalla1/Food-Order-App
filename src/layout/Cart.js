import './header.css'
import {CartContext} from '../store/Cartcontext'
import { useContext } from 'react';
const Cart=props=>{
    

    const ctx=useContext(CartContext);
    
 
   let l=ctx.items.length;
   let a=ctx.items;  let ans=0;
   for(let i=0;i<l;i++){
       ans+=a[i].amount;
   }

return (
<button onClick={props.onClik}>

<i className="fa fa-shopping-cart" aria-hidden="true"></i>
<span>Your Cart</span>
<span>{ans}</span>


</button>


)



}
export default Cart;