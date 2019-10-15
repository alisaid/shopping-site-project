import axios from "axios";
import { history } from '../ConfigureStore'

export const setSearchText = (text = "") => ({
  type: "SET_SEARCH_TEXT",
  text
});

export const getSearchResult = (dispatch, getState) => {
  const state = getState();
  axios
    .get(
      `https://products-data.herokuapp.com/api/searchProduct&searchKeyword=${state.search.text}`
    )
    .then(data => {
      dispatch({
        type: "SET_SEARCH_RESULTS",
        searchResults: data.data
      });
      if(data.data.length > 0) {
        history.push(`/search/${state.search.text}`)
      }else{
        history.push(`/404`)
      }
    })
    .catch(err => {
      dispatch({ type: "ERROR", message: err.message || 'Something went wrong.' });
    });
};
