import axios from 'axios'
export const fetchData = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get("http://localhost:7000/category/findall");
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      }
    };
  };