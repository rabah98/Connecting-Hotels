const initialState = {
    rooms: [],
    status: "idle",
};

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case "rooms/roomsLoading":
            return {
            ...state,
            status: "loading",
            };
        case "rooms/roomAdded":
            return {
            ...state,
            rooms: [...state.rooms, action.payload],
            status: "idle",
            };
        case "rooms/roomErrors":
            return {
            ...state,
            roomErrors: action.payload,
            status: "unprocessable_entity",
            };
        default:
            return state;
    }
}

export function fetchAddroom(newroom) {
    return function (dispatch) {
      dispatch({ type: "rooms/roomsLoading" });
      fetch("/rooms", {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(newroom)
      })
      .then((res) => {
        if(res.ok){
          res.json().then((data) => {
            dispatch({ type: "rooms/roomAdded", payload: data });
          })
        } else {
          res.json().then((data) => {
          dispatch({ type: "rooms/roomErrors", payload: data });
        })
      }})
    };
  }

