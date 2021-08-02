import axios from "axios";

export const getUsers = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  return result.data;
};

export const getUser = async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return result.data;
};
