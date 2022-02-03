import * as actiontypes from "../actionTypes";

export const setCategory = (category) => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SET_CATEGORY,
      payload: category
    }) 
  } catch (error) {
    console.log(error);
  }
}

export const sortBySearch = (search) => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_SEARCH,
      payload: search
    })
  } catch (error) {
    console.log(error);
  }
}

export const sortByCategory = (category) => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_CATEGORY,
      payload: category
    })
  } catch (error) {
    console.log(error);
  }
}

export const sortByOrderAscending = () => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_ORDER_ASCENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByOrderDesending = () => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_ORDER_DESENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByDateAscending = () => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_DATE_ASCENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByDateDesending = () => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_DATE_DESENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByDefault = () => (dispatch) => {
  try {
    dispatch({
      type: actiontypes.SORT_BY_DEFAULT
    })
    
  } catch (error) {
    console.log(error);
  }
}
