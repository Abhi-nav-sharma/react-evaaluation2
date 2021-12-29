import { useSelector } from "react-redux"

export default function ProductsList() {
    const isLoading= useSelector((state)=>state.isLoading)
    const data= useSelector((state)=>state.data)
    const isError= useSelector((state)=>state.isError)
    console.log(data,isLoading,isError)
    return(
        <div>
            {isLoading}&&<h3>'Loading...'</h3>

        </div>
    )
}