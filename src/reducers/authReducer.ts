// reducers/authReducer.ts
// import { SET_TOKEN } from "../actions/authActions";

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: any): AuthState => {
  // console.log("AUTH REDUCER======>", {
  //   initialState,
  //   action,
  // });

  // action ={
  //   type:"",
  //   payload:""
  // }

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

// authReducer.ts
// interface AuthState {
//   token: any;
//   isLoggedIn: boolean;
//   // Add other auth state properties as needed
// }

// const initialState: AuthState = {
//   token: null,
//   isLoggedIn: false,
//   // Initialize other auth state properties
// };

// const authReducer = (state = initialState, action: any): AuthState => {
//   // Handle actions and update state accordingly
//   return state;
// };

// // export { AuthState };
// export default authReducer;
