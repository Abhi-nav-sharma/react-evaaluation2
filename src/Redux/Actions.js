import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./ActionTypes";

export const getDataRequest = () => ({
    type: GET_DATA_REQUEST,
    payload: {
      isLoading: true
    }
  });
  
  export const getDataSuccess = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: {
      data
    }
  });
  
  export const getDataFailure = () => ({
    type: GET_DATA_FAILURE,
    payload: {
      isError: true
    }
  });