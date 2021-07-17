import react, { useState } from 'react'

function Appp(){

let [c,sc]=useState("");
let [items,si]=useState([])
function bt(e){


sc(e.target.value);



}

function btn(){

si((prev)=>{

    return[...prev,c

    ]


})





}
function del(ev){
alert(
    "fxc"
)
let idd=ev.target.id;
console.log(idd)
si((prev)=>{
return( prev.filter((item,i)=>{

return (i!=idd);

}

)
)


}
)


}




return(

<div>

<input type="text" onChange={bt}></input>
<button onClick={btn}>Add</button>

<ul>


{
    items.map((e,i)=>{
        return(
<li onClick={del} id={i} key={i}>{e}</li>)
    })
}


</ul>


</div>




)




}


export default Appp;


























/*import react, {useState} from 'react'
function Appp(){
let [t,sc]=useState("");
let [items,si]=useState([]);

let ch=(ev)=>{

let val=ev.target.value;
sc(val);




}
let addd=()=>{

    si((prev)=>{
return[
        ...prev,t


]
    })
    sc(
        ""
    )


}






    return (

<div>
<input type="text" name="t" onChange={ch}>


</input>
<button onClick={addd}>Add</button>

<ul>

{items.map((e)=>{
    return(
<li>{e}</li>
    )
})}



</ul>

</div>




    )






}
export default Appp;*/