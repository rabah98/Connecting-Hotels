const initialState = {
    user: [],
    status: "idle",
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case "user/userLoading":
        return {
          ...state,
          status: "loading",
        };
      case "user/userCreated":
        return {
          ...state,
          user: action.payload,
          status: "idle",
        };
        case "user/userLogin":
        return {
          ...state,
          user: action.payload,
          status: "idle",
        };
        case "user/userNotCreated":
        return {
          ...state,
          user: 'Not authorized',
          status: "unprocessable_entity",
        };
        case "user/reserveRoom":
        return {
          ...state,
          user: {...state.user, rooms:[...state.user.rooms, action.payload] } 
        };
        case "user/roomNotReserved":
        return {
          ...state,
          error: {error: 'Not Reserved'},
          status: "unprocessable_entity",
        };
        case "user/deleteEditedRoom":
          const rsrvdRooms = state.user.rooms.filter(room => room.id !== action.payload)
        return {
          ...state,
          user: {...state.user, rooms: rsrvdRooms },
          status: "idle",
        };
        case "user/editReservedRoom":
        return {
          ...state,
          user: {...state.user, rooms:[action.payload, ...state.user.rooms] },
          status: "idle",
        };
      default:
        return state;
    }
  }
  export function fetchUser(userData) {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch("/users", {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(userData)
      })
        .then((res) => {
          if(res.ok){
            res.json().then((data) => {
              dispatch({ type: "user/userCreated", payload: data });
            })
          } else {
            res.json().then((data) => {
            dispatch({ type: "user/userNotCreated", payload: "" });
          })
        }})
    };
  }
  export function fetchCurrentUser() {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch("/me")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "user/userCreated", payload: data });
        });
    };
  }
  export function deletCurrentUser() {
    return function (dispatch) {
      dispatch({ type: "user/userNotCreated" });
      fetch('/logout', {
        method: 'DELETE'
      })
    };
  }
  export function fetchLogin(userData) {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      .then((res) => {
        if(res.ok){
          res.json().then((data) => {
            dispatch({ type: "user/userLogin", payload: data });
          })
        } else {
          res.json().then((data) => {
          dispatch({ type: "user/userNotCreated", payload: "" });
        })
      }})
    }
  }

  export function fetchReservRoom(room) {
    return function (dispatch) {
      dispatch({ type: "user/userLoading" });
      fetch("/reserved_rooms", {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(room)
    })
      .then((res) => {
        if(res.ok){
          res.json().then((data) => {
            dispatch({ type: "user/reserveRoom", payload: data });
          })
        } else {
          res.json().then((data) => {
          dispatch({ type: "user/roomNotReserved", payload: "" });
        })
      }})
    }
  }
  export function userEditReservedRoom(id, formData) {
    return function (dispatch) {
      dispatch({ type: "user/deleteEditedRoom", payload: id })
      fetch(`/rooms/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(formData)
    })
    .then((res) => {
      if(res.ok){
        res.json().then((data) => { 
          dispatch({ type: "user/editReservedRoom", payload: data });
        })
      }
    })
  }}

  export function deletReservedRoom(id) {
    return function (dispatch) {
      dispatch({ type: "user/deleteEditedRoom", payload: id });
      fetch(`/reserved_rooms/${id}`, {
        method: "DELETE",
      })
    };
  }