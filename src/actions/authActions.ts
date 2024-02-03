// actions/authActions.ts
// export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (token: string | null) => (
  {
  type: "LOGIN",
  payload: token,
}
);


export const logOut = (token: string | null) => (
  {
  type: "LOG_OUT",
  payload: null,
}
);
