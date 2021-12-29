import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar(){
    const cart= useSelector((state)=>state.cart)
    return(
        <div style={{display:'flex',gap:'50px',justifyContent:'center'}}>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/orders'>Orders</Link></div>
        <div><Link to='/cart'>Cart-{cart.length}</Link></div>
        </div>
    )
}