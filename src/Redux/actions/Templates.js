import { fetchTemplateApi } from "../../Api";
import * as actiontypes from "../actionTypes";
import { setError } from "./Error";
import { setLoading } from "./Loading";

export const fetchTemplates = () => async(dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchTemplateApi();
    // localStorage.setItem("templates", JSON.stringify(data));
    dispatch({
      type: actiontypes.FETCH_TEMPLATES,
      payload: data
    })
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    
    dispatch(setError('No Template found, Please try again'));
  }
}
