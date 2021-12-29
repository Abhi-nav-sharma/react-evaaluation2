import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../Redux/Actions"

export default function ProductsList() {
    const isLoading= useSelector((state)=>state.isLoading)
    const data= useSelector((state)=>state.data)
    const isError= useSelector((state)=>state.isError)
    const dispatch= useDispatch()
    const handleAdd=(id)=>{
        console.log(id)
        const addAction= addItem(id)
        dispatch(addAction)
    }
    return(
        <div>
            {isLoading && <h3>Loading...</h3>}
            {isError && 'Something went wrong'}
            {data.map((item)=>{
                return(
                    <div key={item.id} style={{width:'600px',border:'1px solid black',margin:'10px auto', padding:'10px'}}>
                        <div>
                            <img src={item.image}/>
                        </div>
                        <div>
                            <h3>{item.name}</h3>
                            <h4>Price:{item.price}</h4>
                        </div>
                        <button onClick={()=>handleAdd(item.id)}>Add</button>
                    </div>
                )
            })}
        </div>
    )
}