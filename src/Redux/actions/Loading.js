import * as actiontypes from "../actionTypes";

export const setLoading = (loading) => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SET_LOADING,
      payload: loading
    })
    
  } catch (error) {
    console.log(error);
  }
}