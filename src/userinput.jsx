import react, { useState } from 'react'


function Newexp(props) {
    

    let [n,sn]=useState('');
    let [a,sa]=useState();
    let [d,sd]=useState();
    function expname(e) {
    
        sn(e.target.value);


    }
    function expam(e) {
    
        sa(e.target.value);


    }function expda(e) {
    
        sd(e.target.value);


    }
    function cl() {
        

let data={

name:n,
amount:a,
date:d,


};
console.log(data);
props.add(data);
sn('');
sa();sd();

    }





return(
<>

<p>Title</p>
<input type="text" onChange={expname} value={n} ></input>
<p>Amount</p>
<input type="number" onChange={expam} value={a} ></input>
<p>Date</p>
<input type="date" onChange={expda} value={d} ></input>


<button onClick={cl}>Add Exapanse</button></>

)



}




export default Newexp;