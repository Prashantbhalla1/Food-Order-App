import React, { useReducer } from 'react'

const CartContext=React.createContext();

const defaultcart={
    items:[],
    totalamount:0
}

const reducer=(stat,action)=>{

    if(action.type=='Add'){
       let  found =-1;
        found=stat.items.findIndex((e)=>{
            return e.name==action.item.name;

       })
        if(found==-1){const updateitems=stat.items.concat(action.item);
        const newamount=stat.totalamount + action.item.price*action.item.amount;
        return( {
         items:updateitems,
         totalamount:newamount
        })}
        else{
            (stat.items)[found].amount+=action.item.amount;
            const newamount=stat.totalamount + action.item.price*action.item.amount;
            return( {
                items:stat.items,
                totalamount:newamount
               }) 

        }


    }
    else if(action.type=='remove'){
      const removeindex=stat.items.findIndex((e)=>{

        return e.name==action.name;
      })
      const removeobject=stat.items[removeindex];
      let updateitems;

    let   newamount=stat.totalamount-removeobject.price;
      if(removeobject.amount==1){
           updateitems=stat.items.filter((e)=>{
              return e.name!=action.name;
          })
          
      }
      else{
       updateitems=stat.items;
       (stat.items[removeindex].amount)--;
      }



      return( {
        items:updateitems,
        totalamount:newamount
       })
    }

    return defaultcart;
}


const Cartcontext=(props)=>{
const [stat,dispatch]=useReducer(reducer,defaultcart);
const additems=(item)=>{
dispatch({
type:'Add',
item:item

});
}
const removeitems=(name)=>{
dispatch({
    type:'remove',
    name:name
})
}

const cartdata={

items:[],
totalamount:0,
additem:additems ,
removeitem : removeitems,


}
cartdata.items=stat.items;
cartdata.totalamount=stat.totalamount;
return(
<CartContext.Provider value={cartdata}>
{props.children}

</CartContext.Provider>


)

}
export default Cartcontext;

export {CartContext};