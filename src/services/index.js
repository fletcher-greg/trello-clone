import axios from "axios";

// export const register = form => {
//   axios({
//     method: "post",
//     url: "http://localhost:3001/api/auth/register",
//     body: {
//       ...form
//     }
//   });
// };
let api = axios.create({
  baseURL: "/api"
});
export const register = async e => {
  e.preventDefault();

  try {
    let { data } = await api.post("/auth/register", {
      firstName: "blumenkopf",
      lastName: "buddy",
      email: "gimme@gmail.com",
      password: "fadhasdkfasdfsc"
    });

    console.log(data);
    return;
  } catch (err) {
    console.log(err);

    return;
  }
};

export const subscribe = async email => {
  console.log(email);
  try {
    let message = await api.post("/auth/subscribe", {
      email: email
    });
    return message.data ? true : false;
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getInitData = async () => {
  try {
    let data = await api.get("/auth/user-data");
    console.log(data.data.data);

    return data.data.data;
  } catch (err) {
    console.log(err);
  }
};
