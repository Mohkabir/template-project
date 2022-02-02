import * as actiontypes from "../actionTypes";
import { fetchTemplates } from "./Templates";

// export const fetchSort = (sort) => (dispatch) => {
//   try {
//     dispatch({
//       type: actiontypes.FETCH_SORT,
//     })
    
//   } catch (error) {
//     console.log(error);
//   }
// }

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

export const sortByCategory = (category) => (dispatch) => {
  
  try {
    console.log(category, "from action log");
    dispatch({
      type: actiontypes.SET_CATEGORY,
      payload: category
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByOrderAscending = () => (dispatch) => {
  console.log( "ASCENDING log" );
  try {
    dispatch({
      type: actiontypes.SORT_BY_ORDER_ASCENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByOrderDesending = () => (dispatch) => {
  console.log( "DESENDING log" );
  try {
    dispatch({
      type: actiontypes.SORT_BY_ORDER_DESENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByDateAscending = () => (dispatch) => {
  console.log( "ASCENDING log" );
  try {
    dispatch({
      type: actiontypes.SORT_BY_DATE_ASCENDING
    })
    
  } catch (error) {
    console.log(error);
  }
}

export const sortByDateDesending = () => (dispatch) => {
  console.log( "DESENDING log" );
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
    dispatch(fetchTemplates());
    dispatch({
      type: actiontypes.SORT_BY_DEFAULT
    })
    
  } catch (error) {
    console.log(error);
  }
}
