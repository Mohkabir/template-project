
import * as actiontypes from "../actionTypes";

export const setError = (errorMessage) => (dispatch) => {
  dispatch({
    type: actiontypes.SET_ERROR,
    payload: errorMessage
  })
}
