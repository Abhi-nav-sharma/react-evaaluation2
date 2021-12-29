import { useSelector } from "react-redux"

export default function Checkout(){
    const cart= useSelector((state)=>state.cart)
    return(
        <div>
            {cart.map(item=>{
               return (<div key={item.id} style={{width:'400px',border:'1px solid black',margin:'10px auto', padding:'10px',display:'flex', gap:'50px'}}>
               <div>
                   {item.name}
               </div>
               <div>
                   Rs.{item.price}
               </div>
               </div>
               )})}
               </div>
    )
            }