import { fetchTemplateApi } from "../../Api";
import * as actiontypes from "../actionTypes";
import { setError } from "./Error";
import { setLoading } from "./Loading";

export const fetchTemplates = () => async(dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchTemplateApi();
    dispatch({
      type: actiontypes.FETCH_TEMPLATES,
      payload: data
    })
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setError('Connection failed, Please try again'));
  }
}
