import axios from "axios";
import { BASE_URL } from "./constants";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const request = async (options) => {
  alert("aqui");
  console.log("aqui");
  try {
    let token1;
    // const state = store.getState();
    const userState = null;
    if (userState === null) {
      token1 = "";
    } else {
      const { accessToken } = userState;
      token1 = accessToken;
    }
    // Set the authorization header
    token1 !== "" &&
      (client.defaults.headers.common.Authorization = `Bearer ${token}`);

    const onSuccess = (response) => {
      return response?.data;
    };

    const onError = (error) => {
      return Promise.reject(error.response?.data);
    };

    return client(options).then(onSuccess).catch(onError);
  } catch (e) {}
};
