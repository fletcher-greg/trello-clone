import axios from "axios";

export const register = form => {
  axios({
    method: "post",
    url: "http://localhost:3001/api/auth/register",
    body: {
      ...form
    }
  });
};
