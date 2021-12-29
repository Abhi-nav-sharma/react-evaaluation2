import { Route } from "react-router";
import Checkout from "../Pages/Checkout";
import Home from "../Pages/Home";

export default function AllRoutes(){
    return(<>
<Route exact path='/'>
        <Home/>
    </Route>
    <Route exact path='/cart'>
    <Checkout/>
</Route>
    </>)
}