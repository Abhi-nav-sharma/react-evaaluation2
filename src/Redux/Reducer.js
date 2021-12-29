import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./ActionTypes";

const initState={
    data:[],
    isLoading: true,
  isError: false,
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
          default: {
            return state;
          }
    }
}