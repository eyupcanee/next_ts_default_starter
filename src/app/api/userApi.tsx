import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/",
});

const user = {
  email: "ozlemk@gmail.com",
  password: "test123",
};

export const login = () =>
  api
    .post("/usertest/login", user)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
