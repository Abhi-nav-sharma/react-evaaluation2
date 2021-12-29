
import { loadData, saveData } from "../utils/localStorage";
import { ADD_ITEM, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./ActionTypes";

const initState={
    data:[],
    isLoading: true,
  isError: false,
  cart: loadData('cart') || []
}

export default function reducer(state = initState, action) {
    switch(action.type){
        case GET_DATA_REQUEST: {
            return {
              ...state,
              isLoading: true,
              isError:false
            };
          }
          case GET_DATA_SUCCESS: {
            return {
              ...state,
              data: action.payload.data,
              isLoading: false,
              isError:false
            };
          }
          case GET_DATA_FAILURE: {
            return {
              ...state,
              isLoading: false,
              isError: true
            };
          }
          case ADD_ITEM:{
              let flag=true
              for(let i=0; i<state.cart.length; i++){
                  if(state.cart[i]===action.payload.id){
                      flag=false
                      break
                  }
              }
              if(flag){
              saveData('cart',[...state.cart,action.payload.id])
              return{
                  ...state,cart:[...state.cart,action.payload.id]
              }
            }
            else{
                return state
            }
          }
          default: {
            return state;
          }
    }
}