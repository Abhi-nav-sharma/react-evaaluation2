import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../Components/ProductsList";
import { getDataFailure, getDataRequest, getDataSuccess } from "../Redux/Actions"

export default function Home(){
    const dispatch= useDispatch()
    const getData = () => {
        const requestAction = getDataRequest()
        dispatch(requestAction);
        return fetch("https://json-server-mocker-kittu.herokuapp.com/products")
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            const successAction = getDataSuccess(res);
            dispatch(successAction);
          })
          .catch((res) => {
            const failureAction = getDataFailure();
            dispatch(failureAction);
          });
      };
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <h1>Products</h1>
            <ProductsList/>
        </div>
    )
}