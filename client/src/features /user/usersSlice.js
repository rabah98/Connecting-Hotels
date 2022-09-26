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
          user: {error: 'Not authorized'},
          status: "unprocessable_entity",
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