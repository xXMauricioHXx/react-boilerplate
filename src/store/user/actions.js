export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";

export const setUsers = (value) => ({
  value,
  type: SET_USERS,
});

export const setUser = (value) => ({
  value,
  type: SET_USER,
});
