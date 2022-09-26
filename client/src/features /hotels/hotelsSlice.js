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
    case "hotels/hotelAdded":
      return {
        ...state,
        hotels: [...state.hotels, action.payload],
        status: "idle",
      };
    case "hotels/hotelErrors":
      return {
        ...state,
        hotelErrors: action.payload,
        status: "unprocessable_entity",
      };
    case "hotels/showRooms":
      return {
        ...state,
        id: action.payload,
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
export function fetchAddHotel(newHotel) {
  return function (dispatch) {
    dispatch({ type: "hotels/hotelsLoading" });
    fetch("/hotels", {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(newHotel)
    })
    .then((res) => {
      if(res.ok){
        res.json().then((data) => {
          dispatch({ type: "hotels/hotelAdded", payload: data });
        })
      } else {
        res.json().then((data) => {
        dispatch({ type: "hotels/hotelErrors", payload: data });
      })
    }})
  };
}

export function dispachShowRooms(id) {
  return function (dispatch) {
    dispatch({ type: "hotels/showRooms", payload: id });
  }
}
