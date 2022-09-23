const initialState = {
  hotels: [], 
  status: "idle",
};

export default function hotelsReducer(state = initialState, action) {
  switch (action.type) {
    case "hotels/hotelsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "hotels/hotelsLoaded":
      return {
        ...state,
        hotels: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}
export function fetchHotels() {
  return function (dispatch) {
    dispatch({ type: "hotels/hotelsLoading" });
    fetch("/hotels")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "hotels/hotelsLoaded", payload: data });
      });
  };
}