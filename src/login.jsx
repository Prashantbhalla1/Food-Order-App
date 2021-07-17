import React from 'react'
import Cl from './display.jsx'
function  Expanse(props) {

    

return (


props.item.map((e)=>{


    return (

        <Cl name={e.name} amount ={e.amount} date={e.date}/>


    )

})


)



}
export default Expanse;