import Card from '../Card/Card.js'
import "./Mealsavl.css"
const tot = [
    {
      id: 'm1',
      name: 'Momos',
      description: 'Pure Veg... and delicious ',
      price: 40,
      src:"https://resize.indiatvnews.com/en/resize/oldbucket/715_-/lifestylelifestyle/IndiaTv94add1_momos-main-pic.jpg" },
    {
      id: 'm2',
      name: 'GriilledSandwich',
      description: 'Full of vegetables...',
      price: 30,
      src:"https://www.ndtv.com/cooks/images/grilled.sandwich.jpg"
      
     },
      {
      id: 'm3',
      name: 'ChowMien',
      description: 'Tasty Noodles with vegetables...',
      price: 50,
      src:"https://cdn.shortpixel.ai/spai/w_910+q_lossy+ret_img+to_webp/https://greenbowl2soul.com/wp-content/uploads/2019/11/veg-chowmein_2.jpg"  },
    {
      id: 'm4',
      name: 'AlooParatha',
      description: 'Healthy...and Tasty...',
      price: 60,
      src:"https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/aloo-paratha-recipe-4.jpg"},
      
  ];

const Mealsavl=()=>{

return (

<div className="meals">
{tot.map((e)=>{
return (
    <Card name={e.name} dis={e.description} price ={e.price} src={e.src}></Card> 
)
})}
</div>


)


}
export default Mealsavl;