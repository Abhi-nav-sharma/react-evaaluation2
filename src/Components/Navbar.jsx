import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div style={{display:'flex',gap:'50px',justifyContent:'center'}}>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/orders'>Orders</Link></div>
        <div><Link to='/cart'>Cart</Link></div>
        </div>
    )
}